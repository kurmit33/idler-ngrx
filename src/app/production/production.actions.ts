import { Action } from '@ngrx/store';

export enum ProductionActionTypes {
  LoadProductions = '[Production] Load Productions',
  
  
}

export class LoadProductions implements Action {
  readonly type = ProductionActionTypes.LoadProductions;
}


export type ProductionActions = LoadProductions;
