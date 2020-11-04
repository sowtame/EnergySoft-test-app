import { configureStore } from '@reduxjs/toolkit';

import CrawlLineSlice from 'store/CrawlLine/Slice';

import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/config/saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
  reducer: {
    crawlLine: CrawlLineSlice,
  },
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
