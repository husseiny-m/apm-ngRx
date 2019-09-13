import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
  SetCurrrentProduct = '[Product] Set Current Product',
  ClearCurrrentProduct = '[Product] Clear Current Product',
  InitializeCurrrentProduct = '[Product] Initialize Current Product',
  Load = '[Product] Load Products',
  LoadSucces = '[Product] Load Products Success',
  LoadFaild = '[Product] Load Products Failed'
}

export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;
  constructor(public payload: boolean) {}
}

export class SetCurrrentProduct implements Action {
  readonly type = ProductActionTypes.SetCurrrentProduct;
  constructor(public payload: Product) {}
}

export class ClearCurrrentProduct implements Action {
  readonly type = ProductActionTypes.ClearCurrrentProduct;
}

export class InitializeCurrrentProduct implements Action {
  readonly type = ProductActionTypes.InitializeCurrrentProduct;
}

export class Load implements Action {
  readonly type = ProductActionTypes.Load;
}

export class LoadSucces implements Action {
  readonly type = ProductActionTypes.LoadSucces;
  constructor(public payload: Product[]) {}
}

export class LoadFaild implements Action {
  readonly type = ProductActionTypes.LoadFaild;
  constructor(public payload: string) {}
}

export type ProductActions =
  | ToggleProductCode
  | SetCurrrentProduct
  | ClearCurrrentProduct
  | InitializeCurrrentProduct
  | Load
  | LoadSucces
  | LoadFaild;
