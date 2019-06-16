import { Action } from '@ngrx/store';
import { PowerPlant } from './powerplant.model';


export interface State {
  wind: PowerPlant;
  solar: PowerPlant;
  wave: PowerPlant;
  water: PowerPlant;
  geothermal: PowerPlant;
  coal: PowerPlant;
  biogas: PowerPlant;
  oil: PowerPlant;
  nuclear: PowerPlant;
  fusion: PowerPlant;
}

export const initialState: State = {
  wind: new PowerPlant(0, 'wind', 1, 0.01, 0),
  solar: new PowerPlant(1, 'solar', 100, 1, 0),
  wave: new PowerPlant(2, 'wave', 500, 5, 0),
  water: new PowerPlant(3, 'water', 25000, 250, 0),
  geothermal: new PowerPlant(4, 'geothermal', 100000, 1000, 0),
  coal: new PowerPlant(5, 'coal', 5000, 100, 50),
  biogas: new PowerPlant(6, 'biogas', 250000, 30000, 666),
  oil: new PowerPlant(7, 'oil', 777777, 100000, 7777),
  nuclear: new PowerPlant(8, 'nuclear', 9999999, 500000, 25000),
  fusion: new PowerPlant(9, 'fusion', 25000000, 1111111, 100000),
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
