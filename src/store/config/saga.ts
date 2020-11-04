import { all } from "redux-saga/effects";
import { watchCrawlLineAsync } from "store/CrawlLine/Saga";

export default function* rootSaga() {
  yield all([watchCrawlLineAsync()]);
}
