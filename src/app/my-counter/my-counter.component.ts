import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent implements AfterViewInit, OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
    setTimeout(() => console.log('dans le constructeur 2 (setTimeout)'));
    console.log('dans le constructeur 1');
  }

  ngOnInit() {
    setTimeout(() => console.log('dans le ngOnInit 2 (setTimeout)'));
    console.log('dans ngOnInit');
  }

  ngAfterViewInit() {
    setTimeout(() => console.log('dans le ngAfterViewInit 2 (setTimeout)'));
    console.log('dans ngAfterViewInit');
  }

  increment() {
    this.store.dispatch(increment({ dateMaj: new Date() }));
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
