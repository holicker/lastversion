import { takeLatest } from '@redux-saga/core/effects';
import { createAction, handleActions } from 'redux-actions';
import * as noticeAPI from '../lib/api/notice';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const [LIST_NOTICE, LIST_NOTICE_SUCCESS, LIST_NOTICE_FAILURE] =
  createRequestActionTypes('noticelist/LIST_NOTICE');

export const noticeList = createAction(LIST_NOTICE, ({ writer, page }) => ({
  writer,
  page,
}));

const listNoticeSaga = createRequestSaga(LIST_NOTICE, noticeAPI.noticeList);

export function* noticeListSaga() {
  yield takeLatest(LIST_NOTICE, listNoticeSaga);
}

const initialState = {
  noticelist: null,
  error: null,
};

const noticelist = handleActions(
  {
    [LIST_NOTICE_SUCCESS]: (state, { payload: noticelist }) => ({
      ...state,
      noticelist,
    }),
    [LIST_NOTICE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default noticelist;
