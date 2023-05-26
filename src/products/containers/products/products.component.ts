import {Component, OnInit} from '@angular/core';

import {Pizza} from '../../models/pizza.model';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import * as fromStore from '../../store';// keep in mind, from module is a folder, then we take the index file inside if any
@Component({
  selector: 'products',
  styleUrls: ['products.component.scss'],
  template: `
      <div class="products">
          <div class="products__new">
              <a class="btn btn__ok"
                 routerLink="./new">
                  New Pizza
              </a>
          </div>
          <div class="products__list">
              <div *ngIf="!((pizzas$ | async)?.length)">
                  No pizzas, add one to get started.
              </div>
              <pizza-item
                      *ngFor="let pizza of (pizzas$ |async)"
                      [pizza]="pizza">
              </pizza-item>
          </div>
      </div>
  `,
})
export class ProductsComponent implements OnInit {
  pizzas$: Observable<Pizza[]>;

  constructor(private store: Store<fromStore.ProductsState>) {
  }

  ngOnInit() {
    // command below is commented and replaced by command after-prettier using a stream
    // this.store.select<Pizza[]>(fromStore.getPizzas).subscribe({next:(state)=> this.pizzas = state});
    this.pizzas$ = this.store.select<Pizza[]>(fromStore.getPizzas);
  }
}
