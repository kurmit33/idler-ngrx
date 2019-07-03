import { createSelector } from '@ngrx/store';
import { POWERPLANT_TYPES } from './powerplant.actions';

export const selectPowerPlantState = state => state.powerplant;

export const takePowerPlants = createSelector(
  selectPowerPlantState,
  powerplant => powerplant,
);

export const selectPowerPlant = createSelector(
  takePowerPlants,
  (powerplant, props: POWERPLANT_TYPES) => {
    switch (props) {
      case POWERPLANT_TYPES.WIND:
        return powerplant.wind;
      case POWERPLANT_TYPES.SOLAR:
        return powerplant.solar;
      case POWERPLANT_TYPES.WAVE:
        return powerplant.wave;
      case POWERPLANT_TYPES.WATER:
        return powerplant.water;
      case POWERPLANT_TYPES.GEOTHERMAL:
        return powerplant.geothermal;
      case POWERPLANT_TYPES.COAL:
        return powerplant.coal;
      case POWERPLANT_TYPES.BIOGAS:
        return powerplant.biogas;
      case POWERPLANT_TYPES.OIL:
        return powerplant.oil;
      case POWERPLANT_TYPES.NUCLEAR:
        return powerplant.nuclear;
      case POWERPLANT_TYPES.FUSION:
        return powerplant.fusion;
    }
  }
);

export const takeWind = createSelector(
  takePowerPlants,
  powerplant => powerplant.wind,
);

export const takeSolar = createSelector(
  takePowerPlants,
  powerplant => powerplant.solar,
);

export const takeWave = createSelector(
  takePowerPlants,
  powerplant => powerplant.wave,
);

export const takeWater = createSelector(
  takePowerPlants,
  powerplant => powerplant.water,
);

export const takeGeothermal = createSelector(
  takePowerPlants,
  powerplant => powerplant.geothermal,
);

export const takeCoal = createSelector(
  takePowerPlants,
  powerplant => powerplant.coal,
);

export const takeBiogas = createSelector(
  takePowerPlants,
  powerplant => powerplant.biogas,
);

export const takeOil = createSelector(
  takePowerPlants,
  powerplant => powerplant.oil,
);

export const takeNuclear = createSelector(
  takePowerPlants,
  powerplant => powerplant.nuclear,
);

export const takeFusion = createSelector(
  takePowerPlants,
  powerplant => powerplant.fusion,
);
