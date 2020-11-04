import { createSelector } from '@reduxjs/toolkit';
import { ruturnValue } from 'helpers/store';
import { RootState } from 'store/config';
import { slice } from './Slice';

export const selCrawlLines = createSelector([(state: RootState) => state[slice.name].crawlLines], ruturnValue);
export const selActicles = createSelector([(state: RootState) => state[slice.name].articles], ruturnValue);
export const selActicleLoading = createSelector([(state: RootState) => state[slice.name].isLoading], ruturnValue);
