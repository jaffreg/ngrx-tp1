import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, { dateMaj }) => {
    console.log('appel de increment à ' + dateMaj);
    return state + 1;
  }),
  //on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
