import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import { ProductActionTypes, LoadSuccess, LoadFailed } from './product.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Product } from '../product';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService) {}
  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ProductActionTypes.Load),
    mergeMap((action: ProductActionTypes.Load) => this.productService.getProducts().pipe(
      map((products: Product[]) => (new LoadSuccess(products))),
      catchError(err => of( new LoadFailed(err)))
    ))
  );
}
