import { Action } from "@reduxjs/toolkit";

declare module "@reduxjs/toolkit" {
  export interface AnyAction<T = any> extends Action {
    payload: T;
  }
}
