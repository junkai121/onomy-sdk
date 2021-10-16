package types

import (
	"fmt"
	"github.com/cosmos/cosmos-sdk/mint/mathd"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// NewMinter returns a new Minter object with the given inflation and annual
// provisions values.
func NewMinter(inflation, annualProvisions sdk.Dec) Minter {
	return Minter{
		Inflation:        inflation,
		AnnualProvisions: annualProvisions,
	}
}

// InitialMinter returns an initial Minter object with a given inflation value.
func InitialMinter(inflation sdk.Dec) Minter {
	return NewMinter(
		inflation,
		sdk.NewDec(0),
	)
}

// DefaultInitialMinter returns a default initial Minter object for a new chain
// which uses an inflation rate of 13%.
func DefaultInitialMinter() Minter {
	return InitialMinter(
		sdk.NewDecWithPrec(13, 2),
	)
}

// validate minter
func ValidateMinter(minter Minter) error {
	if minter.Inflation.IsNegative() {
		return fmt.Errorf("mint parameter Inflation should be positive, is %s",
			minter.Inflation.String())
	}
	return nil
}

// NextInflationRate returns the new inflation rate for the next hour.
func (m Minter) NextInflationRate(params Params, bondedRatio sdk.Dec, totalSupply sdk.Int) sdk.Dec {
	// NOM staking is defined by an initial hyper-inflationary regime followed by an
	// infinite regime stabilizing % staked around a goal.

	// End of the hyper-inflationary period
	endHyperInflation := sdk.NewInt(int64(25000000))

	// Initialize the inflation variable
	inflation := sdk.NewDec(int64(0))

	if totalSupply.GTE(endHyperInflation) {
		// Infinite stabilized regime
		//
		// The target annual inflation rate is recalculated for each previsions cycle. The
		// inflation is also subject to a rate change (positive or negative) depending on
		// the distance from the desired ratio (67%). The maximum rate change possible is
		// defined to be 13% per year, however the annual inflation is capped as between
		// 7% and 20%.

		// (1 - bondedRatio/GoalBonded) * InflationRateChange
		inflationRateChangePerYear := sdk.OneDec().
			Sub(bondedRatio.Quo(params.GoalBonded)).
			Mul(params.InflationRateChange)
		inflationRateChange := inflationRateChangePerYear.Quo(sdk.NewDec(int64(params.BlocksPerYear)))

		// adjust the new annual inflation for this next cycle
		inflation = m.Inflation.Add(inflationRateChange) // note inflationRateChange may be negative
		if inflation.GT(params.InflationMax) {
			inflation = params.InflationMax
		}
		if inflation.LT(params.InflationMin) {
			inflation = params.InflationMin
		}

	} else {
		// Hyper-inflationary regime
		totalSupplyDec := totalSupply.ToDec()

		a := sdk.NewDec(100)
		b := sdk.NewDec(int64(150000000))
		c := sdk.NewDec(int64(50000000))

		temp1 := totalSupplyDec.Sub(b).Power(2)
		temp2 := c.Power(2).MulInt64(2)
		temp3 := temp1.Quo(temp2).Mul(sdk.NewDec(-1))
		temp4 := mathd.Exp(temp3)

		inflation = sdk.NewDec(temp4.Mul(a).RoundInt64())

	}

	return inflation
}

// NextAnnualProvisions returns the annual provisions based on current total
// supply and inflation rate.
func (m Minter) NextAnnualProvisions(_ Params, totalSupply sdk.Int) sdk.Dec {
	return m.Inflation.MulInt(totalSupply)
}

// BlockProvision returns the provisions for a block based on the annual
// provisions rate.
func (m Minter) BlockProvision(params Params) sdk.Coin {
	provisionAmt := m.AnnualProvisions.QuoInt(sdk.NewInt(int64(params.BlocksPerYear)))
	return sdk.NewCoin(params.MintDenom, provisionAmt.TruncateInt())
}
