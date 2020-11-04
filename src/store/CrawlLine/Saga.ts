import { AnyAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { ArticleModel } from 'store/CrawlLine/Model';
import { fetchArticleAction, fetchArticleFailAction, fetchArticleSuccessAction } from 'store/CrawlLine/Slice';
import { fetchApi } from 'utils/fetch';

export function* incrementAsync({ payload }: AnyAction<string>) {
  try {
    const response = yield call(fetchApi, `https://www.reddit.com/r/${payload}.json`);
    yield put(fetchArticleSuccessAction(new ArticleModel(response)));
  } catch {
    yield put(fetchArticleFailAction());
  }
}

export function* watchCrawlLineAsync() {
  yield takeEvery(fetchArticleAction, incrementAsync);
}
