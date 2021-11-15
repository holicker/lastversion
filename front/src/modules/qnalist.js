import { takeLatest } from '@redux-saga/core/effects';
import { createAction, handleActions } from 'redux-actions';
import * as qnaAPI from '../lib/api/qna';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const [LIST_QNA, LIST_QNA_SUCCESS, LIST_QNA_FAILURE] =
  createRequestActionTypes('qnalist/LIST_QNA');

export const qnaList = createAction(LIST_QNA, ({ vendorid, page }) => ({
  vendorid,
  page,
}));

const listqnaSaga = createRequestSaga(LIST_QNA, qnaAPI.qnalist);

export function* qnalistSaga() {
  yield takeLatest(LIST_QNA, listqnaSaga);
}

const initialState = {
  qnalist: null,
  error: null,
};

const qnalist = handleActions(
  {
    [LIST_QNA_SUCCESS]: (state, { payload: qnalist }) => ({
      ...state,
      qnalist,
      error:null,
    }),
    [LIST_QNA_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
      qnalist:null,
    }),
  },
  initialState
);

export default qnalist;
