import { takeLatest } from "@redux-saga/core/effects";
import { createAction, handleActions } from "redux-actions";
import * as qnaAPI from "../lib/api/qna";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

const [READ_QNA, READ_QNA_SUCCESS, READ_QNA_FAILURE] =
  createRequestActionTypes("qna/READ_QNA");
const UNLOAD_QNA = "qna/UNLOAD_QNA";

export const readQna = createAction(READ_QNA, (id) => id);
export const unloadQna = createAction(UNLOAD_QNA);

const readQnaSaga = createRequestSaga(READ_QNA, qnaAPI.readQna);

export function* qnaSaga() {
  yield takeLatest(READ_QNA, readQnaSaga);
}

const initialState = {
  qna: null,
  error: null,
};

const qna = handleActions(
  {
    [READ_QNA_SUCCESS]: (state, { payload: qna }) => ({
      ...state,
      qna,
    }),
    [READ_QNA_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_QNA]: () => initialState,
  },
  initialState
);

export default qna;
