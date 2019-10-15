import { Product } from '../product';
import { ProductActions, ProductActionTypes } from './product.actions';



export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
}

const initialState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: ''
};

export function reducer(state = initialState, action: ProductActions) {
  switch (action.type) {
    case ProductActionTypes.ToggleProductCode:
      return { ...state, showProductCode: action.payload };

    case ProductActionTypes.SetCurrentProduct:
      return { ...state, currentProductId: action.payload.id };

    case ProductActionTypes.ClearCurrentProduct:
      return { ...state, currentProductId: null };

    case ProductActionTypes.InitializeCurrentProduct:
      return {
        ...state,
        currentProductId: 0
      };

    case ProductActionTypes.LoadSuccess:
      return {
        ...state,
        products: action.payload,
        error: ''
      };
    case ProductActionTypes.LoadFailed:
      return {
        ...state,
        products: [],
        error: action.payload
      };

    case ProductActionTypes.UpdateProductSuccess:
      const updatedProducts = state.products.map((item) =>
        action.payload.id === item.id ? action.payload : item
      );
      return {
        ...state,
        products: updatedProducts,
        currentProductId: action.payload.id,
        error: ''
      };
    case ProductActionTypes.UpdateProductFail:
      return {
        ...state,
        error: action.payload
      };

    case ProductActionTypes.AddProductSuccess:
      const newProductsAfterAdd = [...state.products, action.payload];
      return {
        ...state,
        products: newProductsAfterAdd,
        currentProductId: action.payload.id,
        error: ''
      };

    case ProductActionTypes.AddProductFail:
      return {
        ...state,
        error: action.payload
      };

    case ProductActionTypes.DeleteProductSuccess:
      const newProductsAfterDelete = state.products.filter((product) =>
        action.payload !== product.id
      );
      return {
        ...state,
        products: newProductsAfterDelete,
        currentProductId: null,
        error: ''
      };
    case ProductActionTypes.DeleteProductFail:
      return {
        ...state,
        error: action.payload
      };

    default:
      return { ...state };
  }
}
