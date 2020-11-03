import { configureStore } from "@reduxjs/toolkit";

import CrawlLineSlice from "store/CrawlLineSlice";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware({});

const store = configureStore({
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
  reducer: {
    crawlLine: CrawlLineSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
