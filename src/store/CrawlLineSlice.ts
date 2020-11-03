import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ruturnValue } from "helpers/store";
import { RootState } from "store/store";

const webTerms = ["frontend", "reactjs", "vuejs", "angular"];

interface MenuIntitialStateI {
  crawlLines: string[];
}

const initialState: MenuIntitialStateI = {
  crawlLines: webTerms,
};

const slice = createSlice({
  name: "crawlLine",
  initialState,
  reducers: {
    fetchCrawlLineAction: (state, action) => {
      // state.menuIsOpen = action.payload;
    },
  },
});

export const { fetchCrawlLineAction } = slice.actions;

export const selCrawlLines = createSelector(
  [(state: RootState) => state[slice.name].crawlLines],
  ruturnValue
);

export default slice.reducer;
