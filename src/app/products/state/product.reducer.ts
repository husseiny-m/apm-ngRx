import * as formRoot from '../../state/app.state';
import { Product } from '../product';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ProductState {
  showProductCode: boolean;
  selectedProduct: Product;
  produts: Product[];
}

const stateInit = {
  showProductCode: true,
  selectedProduct: null,
  produts: []
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getSelectedProduct = createSelector(
  getProductFeatureState,
  state => state.selectedProduct
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.produts
);


export interface State extends formRoot.State {
  products: ProductState;
}
export function reducer(state = stateInit, action) {
  switch (action.type) {
    case 'TOGGLE_PRODUCT_CODE':
      return { ...state, showProductCode: action.payload };

    default:
      return { ...state };
  }
}
