import { CommonAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { ArticleModel } from 'store/CrawlLine/Model';
import { fetchArticleAction, fetchArticleFailAction, fetchArticleSuccessAction } from 'store/CrawlLine/Slice';
import { fetchApi } from 'utils/Fetch';

export function* incrementAsync({ payload }: CommonAction<string>) {
  try {
    const response: ArticleModel = yield call(fetchApi, `https://www.reddit.com/r/${payload}.json`);
    yield put(fetchArticleSuccessAction(new ArticleModel(response)));
  } catch {
    yield put(fetchArticleFailAction());
  }
}

export function* watchCrawlLineAsync() {
  yield takeEvery(fetchArticleAction, incrementAsync);
}
