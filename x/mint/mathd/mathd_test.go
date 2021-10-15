package mathd

import (
	"github.com/cosmos/cosmos-sdk/types"
	"reflect"
	"testing"
)

// Factorial decimal test
// TestFact
func TestFact(t *testing.T) {
	tests := []struct {
		name    string
		d       types.Dec
		want    types.Dec
		wantErr bool
	}{
		{"0", types.NewDec(0), types.NewDec(1), false},
		{"1", types.NewDec(1), types.NewDec(1), false},
		{"2", types.NewDec(2), types.NewDec(2), false},
		{"3", types.NewDec(3), types.NewDec(6), false},
		{"10", types.NewDec(10), types.NewDec(3628800), false},
		{"-1", types.NewDec(-1), types.NewDec(0), true},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {

			got, err := Fact(tt.d)
			if (err != nil) != tt.wantErr {
				t.Errorf("Fact() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(got, tt.want) {
				t.Errorf("Fact() got = %v, want %v", got, tt.want)
			}
		})
	}
}

// Exponent decimal test
// TestExp
func TestExp(t *testing.T) {
	precision := struct {
		from types.Dec
		to   types.Dec
	}{
		NewDecFromFloat64(99.5), NewDecFromFloat64(100.5),
	}
	tests := []struct {
		name string
		d    types.Dec
		want types.Dec
	}{
		{"0 value", types.NewDec(0), types.NewDec(1)},
		{"1 value", types.NewDec(1), NewDecFromFloat64(2.718281828459045)},
		{"2 value", types.NewDec(2), NewDecFromFloat64(7.38905609893065)},
		{"10 value", types.NewDec(10), NewDecFromFloat64(22026.465794806718)},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := Exp(tt.d); tt.want.MulInt64(100).Quo(got).LT(precision.from) || tt.want.MulInt64(100).Quo(got).GT(precision.to) {
				t.Errorf("Exp() = %v, prec %v want from %v to %v", got, tt.want.MulInt64(100).Quo(got), precision.from, precision.to)
			}
		})
	}
}
