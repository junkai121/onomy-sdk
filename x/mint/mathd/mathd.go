package mathd

import (
	"errors"
	"github.com/cosmos/cosmos-sdk/types"
	"math/big"
)

// NewDecFromFloat64 Convert float64 to the decimal
func NewDecFromFloat64(f float64) types.Dec {
	prec := float64(1000000000000000000)
	bF := new(big.Float).SetFloat64(f * prec)
	bInt, _ := bF.Int(new(big.Int))
	a := types.NewDecFromBigInt(bInt).Quo(types.NewDec(int64(prec)))
	return a
}

// Fact Calculate decimal factorial
func Fact(d types.Dec) (types.Dec, error) {
	if d.IsNegative() {
		return types.ZeroDec(), errors.New("negative value doesn't have factorial")
	}

	sum := types.OneDec()

	for i := types.OneDec(); i.LT(d); i = i.Add(types.OneDec()) {
		sum = sum.Mul(i.Add(types.OneDec()))
	}

	return sum, nil
}

// Exp Calculate decimal exponent
func Exp(d types.Dec) types.Dec {
	sum := d.Add(types.OneDec())

	for i := uint64(2); i < 55; i++ {
		fact, _ := Fact(types.NewDec(int64(i)))
		sum = sum.Add(d.Power(i).Quo(fact))
	}

	return sum
}
