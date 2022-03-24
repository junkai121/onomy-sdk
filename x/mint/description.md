# Mint
doc: https://docs.cosmos.network/master/modules/distribution/03_begin_block.html

## Parameters
The current parameters:

```
"params": {
    "mint_denom": "anom",
    "inflation_rate_change": "0.130000000000000000",
    "inflation_max": "0.200000000000000000",
    "inflation_min": "0.070000000000000000",
    "goal_bonded": "0.670000000000000000",
    "blocks_per_year": "6311520"
}
```

## The logic to compute the reward per block (Begin-Block):
Minting parameters are recalculated and inflation paid at the beginning of each block.

## Steps to compute the provision amount

* Inflation = hyperinflation value now (the default after the end of hyperinflation period)
* AnnualProvisions = Inflation * totalStakingSupply
* provisionAmt = AnnualProvisions / params.BlocksPerYear ("blocks_per_year": "6311520")

Here all minted coins go to the "fee_collector". The fee_collector is a account which collects the fees from all modules.
That account will be used by destribution module in the beginning of the next block to get the coins and destribut.

# Destribution module
https://docs.cosmos.network/master/modules/distribution/

## Parameters
```
"distribution": {
    "params": {
        "community_tax": "0.020000000000000000",
        "base_proposer_reward": "0.010000000000000000",
        "bonus_proposer_reward": "0.040000000000000000",
        "withdraw_addr_enabled": true
    },
    ...
}
```

The distribution mechanism outlined herein is used to lazily distribute the following rewards between validators and associated delegators:

* multi-token fees to be socially distributed
* proposer reward pool
* inflated atom (nom for us) provisions
* validator commission on all rewards earned by their delegators stake

## How it works:
All details are here: https://docs.cosmos.network/master/modules/distribution/03_begin_block.html

Briefly: 

* ```fee = tx fees + inflation fee```

* ``community_tax * fee`` goes to community poll
* reward for a single delegator is = ```(delegator proportion of the validator power / validator power) * (validator power / total bonded power) * (1 - community tax rate) * (1 - validator commision rate)
  = (delegator proportion of the validator power / total bonded power) * (1 -
  community tax rate) * (1 - validator commision rate)```

The validator is the delegator as well, hence it's reward can be computed in the same way.

------------------------------------------------------------------------------------------------------------------------
## Our use cases

### 1. Check that the total minted annual amount is expected

* Based on the current state:

  * latest block = 467025
  * current supply = 44409857 nom
  * initial supply (from genesis) = 44000000 nom

* noms produced/minted now = ```44409857 - 44000000 = 409857nom``` (also we need to understand that some noms were bridged, 
but the amount is low, so it will not affect the calculation)

* noms produced/minted now % = ```409857 / 44000000 = 0.00931493181 * 100 = 0.931493181%```

* if the year = 6311520 (param from mint), and latest block = 467025 until the end of the year 
(with the assumption that the inflation was like current and remains the same) we will produce:
```6311520 * 409857 / 467025 = 5538934.00276 or 5538934/44000000 = 0.12588486363 * 100 = 12.588486363%``` - which is in expected range.

### 2. Check that the reward of the delegator is expected

