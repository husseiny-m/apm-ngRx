import * as formRoot from '../../state/app.state';
import { Product } from '../product';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductActions, ProductActionTypes } from './product.actions';

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  produts: Product[];
}

const initialState = {
  showProductCode: true,
  currentProduct: null,
  produts: []
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.produts
);

export interface State extends formRoot.State {
  products: ProductState;
}
export function reducer(state = initialState, action: ProductActions) {
  switch (action.type) {
    case ProductActionTypes.ToggleProductCode:
      return { ...state, showProductCode: action.payload };

    case ProductActionTypes.SetCurrrentProduct:
      return { ...state, currentProduct: { ...action.payload } };

    case ProductActionTypes.ClearCurrrentProduct:
      return { ...state, currentProduct: null };

    case ProductActionTypes.InitializeCurrrentProduct:
      return { ...state, currentProduct: {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0
      } };
    default:
      return { ...state };
  }
}
