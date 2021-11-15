import { takeLatest } from "@redux-saga/core/effects";
import { createAction, handleActions } from "redux-actions";
import * as reviewAPI from "../lib/api/review";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

const [LIST_REVIEW, LIST_REVIEW_SUCCESS, LIST_REVIEW_FAILURE] =
  createRequestActionTypes("reviewlist/LIST_REVIEW");

export const reviewList = createAction(LIST_REVIEW, ({ vendorid, page }) => ({
  vendorid,
  page,
}));

const listReviewSaga = createRequestSaga(LIST_REVIEW, reviewAPI.reviewList);

export function* reviewListSaga() {
  yield takeLatest(LIST_REVIEW, listReviewSaga);
}

const initialState = {
  reviewlist: null,
  error: null,
};

const reviewlist = handleActions(
  {
    [LIST_REVIEW_SUCCESS]: (state, { payload: reviewlist }) => ({
      ...state,
      reviewlist,
      error: null,
    }),
    [LIST_REVIEW_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
      reviewlist: null,
    }),
  },
  initialState
);

export default reviewlist;
