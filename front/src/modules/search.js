import { createAction, handleActions } from "redux-actions";

const INITIALIZE = "search/INITIALIZE";
const CHANGE_KEYWORD = "search/CHAGNE_SEARCH";

export const initialize = createAction(INITIALIZE);
export const changeKeyword = createAction(CHANGE_KEYWORD, ({ keyword }) => ({
  keyword,
}));

const initialState = {
  keyword: "",
};

const search = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_KEYWORD]: (state, { payload: { keyword } }) => ({
      ...state,
      keyword: keyword,
    }),
  },
  initialState
);

export default search;
