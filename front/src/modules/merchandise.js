import { takeLatest } from "@redux-saga/core/effects";
import { createAction, handleActions } from "redux-actions";
import * as merchandiseAPI from "../lib/api/merchandise";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

const [READ_MERCHANDISE, READ_MERCHANDISE_SUCCESS, READ_MERCHANDISE_FAILURE] =
  createRequestActionTypes("merchandise/READ_MERCHANDISE");
const UNLOAD_MERCHANDISE = "merchandise/UNLOAD_MERCHANDISE";

export const readMerchandise = createAction(READ_MERCHANDISE, (id) => id);
export const unloadMerchandise = createAction(UNLOAD_MERCHANDISE);

const readMerchandiseSaga = createRequestSaga(
  READ_MERCHANDISE,
  merchandiseAPI.readMerchandise
);

export function* merchandiseSaga() {
  yield takeLatest(READ_MERCHANDISE, readMerchandiseSaga);
}

const initialState = {
  merchandise: null,
  error: null,
};

const merchandise = handleActions(
  {
    [READ_MERCHANDISE_SUCCESS]: (state, { payload: merchandise }) => ({
      ...state,
      merchandise,
    }),
    [READ_MERCHANDISE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_MERCHANDISE]: (state) => initialState,
  },
  initialState
);

export default merchandise;
