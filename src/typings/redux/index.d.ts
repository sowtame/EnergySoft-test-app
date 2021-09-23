import { Action } from '@reduxjs/toolkit';

declare module '@reduxjs/toolkit' {
  export interface CommonAction<T = any> extends Action {
    payload: T;
  }
}
