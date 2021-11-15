import { takeLatest } from "@redux-saga/core/effects";
import { createAction, handleActions } from "redux-actions";
import * as reviewAPI from "../lib/api/review";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

const [READ_REVIEW, READ_REVIEW_SUCCESS, READ_REVIEW_FAILURE] =
  createRequestActionTypes("review/READ_REVIEW");
const UNLOAD_REVIEW = "review/UNLOAD_REVIEW";

export const readReview = createAction(READ_REVIEW, (id) => id);
export const unloadReview = createAction(UNLOAD_REVIEW);

const readReviewSaga = createRequestSaga(READ_REVIEW, reviewAPI.readReview);

export function* reviewSaga() {
  yield takeLatest(READ_REVIEW, readReviewSaga);
}

const initialState = {
  review: null,
  error: null,
};

const review = handleActions(
  {
    [READ_REVIEW_SUCCESS]: (state, { payload: review }) => ({
      ...state,
      review,
    }),
    [READ_REVIEW_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_REVIEW]: () => initialState,
  },
  initialState
);

export default review;
