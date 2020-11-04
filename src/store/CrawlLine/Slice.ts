import { createSlice } from '@reduxjs/toolkit';
import { IArticle } from 'store/CrawlLine/Model';

const webTerms = ['frontend', 'reactjs', 'vuejs', 'angular'];

const getArticleId = (articles: IArticle[], selectedId: number) => articles.findIndex(({ id }) => id === selectedId);

interface MenuIntitialStateI {
  crawlLines: string[];
  articles: IArticle[];
  isLoading: boolean;
  isFailed: boolean;
}

const initialState: MenuIntitialStateI = {
  crawlLines: webTerms,
  articles: [],
  isLoading: false,
  isFailed: false,
};

export const slice = createSlice({
  name: 'crawlLine',
  initialState,
  reducers: {
    fetchArticleAction: (state, action) => {
      console.log(action.payload);
      state.isLoading = true;
    },
    fetchArticleSuccessAction: (state, { payload }) => {
      state.articles.push(payload);
      state.isLoading = false;
    },
    fetchArticleFailAction: (state) => {
      state.isLoading = false;
      state.isFailed = true;
    },
    likeArticleAction: (state, { payload }) => {
      // Найдем айдишник
      const articleId = getArticleId(state.articles, payload);
      const article = state.articles[articleId];

      // Запишем в стейт
      state.articles.splice(articleId, 1, { ...article, isLiked: !article.isLiked });
    },
    removeArticleAction: (state, { payload }) => {
      // Найдем айдишник
      const articleId = getArticleId(state.articles, payload);

      // Удалим из стейта
      state.articles.splice(articleId, 1);
    },
  },
});

export const {
  fetchArticleAction,
  fetchArticleSuccessAction,
  fetchArticleFailAction,
  likeArticleAction,
  removeArticleAction,
} = slice.actions;

export default slice.reducer;
