import { takeLatest } from "@redux-saga/core/effects";
import { createAction, handleActions } from "redux-actions";
import * as qnaAPI from "../lib/api/qna";
import * as reviewAPI from "../lib/api/review";
import * as merchandiseAPI from "../lib/api/merchandise";
import * as noticeAPI from "../lib/api/notice";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

const INITIALIZE = "write/INITIALIZE";
const CHANGE_FIELD = "write/CHANGE_FIELD";

const initialState = {
  title: ``,
  body: ``,
  price: ``,
  notice: null,
  noticeError: null,
  qna: null,
  qnaError: null,
  review: null,
  reviewError: null,
  describe: null,
  describeError: null,
  qnareply: null,
  qnareplyError: null,
  reviewreply: null,
  reviewreplyError: null,
};

const SET_ORIGINAL_QNA = "write/SET_ORIGINAL_QNA";
const SET_ORIGINAL_REVIEW = "write/SET_ORIGINAL_REVIEW";
const SET_ORIGINAL_NOTICE = "write/SET_ORIGINAL_NOTICE";
const SET_ORIGINAL_MERCHANDISE = "write/SET_ORIGINAL_MERCHANDISE";

const [WRITE_QNA, WRITE_QNA_SUCCESS, WRITE_QNA_FAILURE] =
  createRequestActionTypes("write/WRITE_QNA");
const [UPDATE_QNA, UPDATE_QNA_SUCCESS, UPDATE_QNA_FAILURE] =
  createRequestActionTypes("write/UPDATE_QNA");
const [WRITE_REVIEW, WRITE_REVIEW_SUCCESS, WRITE_REVIEW_FAILURE] =
  createRequestActionTypes("write/WRITE_REVIEW");
const [UPDATE_REVIEW, UPDATE_REVIEW_SUCCESS, UPDATE_REVIEW_FAILURE] =
  createRequestActionTypes("write/UPDATE_REVIEW");
const [WRITE_NOTICE, WRITE_NOTICE_SUCCESS, WRITE_NOTICE_FAILURE] =
  createRequestActionTypes("write/WRITE_NOTICE");
const [UPDATE_NOTICE, UPDATE_NOTICE_SUCCESS, UPDATE_NOTICE_FAILURE] =
  createRequestActionTypes("write/UPDATE_NOTICE");
const [
  WRITE_MERCHANDISE,
  WRITE_MERCHANDISE_SUCCESS,
  WRITE_MERCHANDISE_FAILURE,
] = createRequestActionTypes("write/WRITE_MERCHANDISE");
const [
  UPDATE_MERCHANDISE,
  UPDATE_MERCHANDISE_SUCCESS,
  UPDATE_MERCHANDISE_FAILURE,
] = createRequestActionTypes("write/UPDATE_MERCHANDISE");

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writeQna = createAction(
  WRITE_QNA,
  ({ vendorid, title, body, tags, writer }) => ({
    vendorid,
    title,
    body,
    tags,
    writer,
  })
);
export const setOriginalQna = createAction(SET_ORIGINAL_QNA, (qna) => qna);

export const updateQna = createAction(
  UPDATE_QNA,
  ({ id, title, body, tags }) => ({ id, title, body, tags })
);
export const writeReview = createAction(
  WRITE_REVIEW,
  ({ vendorid, title, body, tags, writer }) => ({
    vendorid,
    title,
    body,
    tags,
    writer,
  })
);
export const setOriginalReview = createAction(
  SET_ORIGINAL_REVIEW,
  (review) => review
);

export const updateReview = createAction(
  UPDATE_REVIEW,
  ({ id, title, body, tags }) => ({ id, title, body, tags })
);
export const writeNotice = createAction(
  WRITE_NOTICE,
  ({ title, body, tags }) => ({
    title,
    body,
    tags,
  })
);
export const setOriginalNotice = createAction(
  SET_ORIGINAL_NOTICE,
  (notice) => notice
);

export const updateNotice = createAction(
  UPDATE_NOTICE,
  ({ id, title, body, tags }) => ({ id, title, body, tags })
);

export const writeMerchandise = createAction(
  WRITE_MERCHANDISE,
  (formdata) => formdata
);
export const setOriginalMerchandise = createAction(
  SET_ORIGINAL_MERCHANDISE,
  (merchandise) => merchandise
);

export const updateMerchandise = createAction(
  UPDATE_MERCHANDISE,
  ({ id, title, body, tags }) => ({ id, title, body, tags })
);

const writeQnaSaga = createRequestSaga(WRITE_QNA, qnaAPI.writeQna);
const updateQnaSaga = createRequestSaga(UPDATE_QNA, qnaAPI.updateQna);
const writeReviewSaga = createRequestSaga(WRITE_REVIEW, reviewAPI.writeReview);
const updateReviewSaga = createRequestSaga(
  UPDATE_REVIEW,
  reviewAPI.updateReview
);
const writeNoticeSaga = createRequestSaga(WRITE_NOTICE, noticeAPI.writeNotice);
const updateNoticeSaga = createRequestSaga(
  UPDATE_NOTICE,
  noticeAPI.updateNotice
);
const writeMerchandiseSaga = createRequestSaga(
  WRITE_MERCHANDISE,
  merchandiseAPI.writeMerchandise
);
const updateMerchandiseSaga = createRequestSaga(
  UPDATE_MERCHANDISE,
  merchandiseAPI.updateMerchandise
);

export function* writeSaga() {
  yield takeLatest(WRITE_QNA, writeQnaSaga);
  yield takeLatest(UPDATE_QNA, updateQnaSaga);
  yield takeLatest(WRITE_REVIEW, writeReviewSaga);
  yield takeLatest(UPDATE_REVIEW, updateReviewSaga);
  yield takeLatest(WRITE_NOTICE, writeNoticeSaga);
  yield takeLatest(UPDATE_NOTICE, updateNoticeSaga);
  yield takeLatest(WRITE_MERCHANDISE, writeMerchandiseSaga);
  yield takeLatest(UPDATE_MERCHANDISE, updateMerchandiseSaga);
}

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),

    [WRITE_QNA]: (state) => ({
      ...state,
      qna: null,
      qnaError: null,
    }),
    [WRITE_QNA_SUCCESS]: (state, { payload: qna }) => ({
      ...state,
      qna,
    }),
    [WRITE_QNA_FAILURE]: (state, { payload: qnaError }) => ({
      ...state,
      qnaError,
    }),
    [SET_ORIGINAL_QNA]: (state, { payload: qna }) => ({
      ...state,
      title: qna.title,
      body: qna.body,
      tags: qna.tags,
      originalQnaId: qna.id,
    }),
    [UPDATE_QNA_SUCCESS]: (state, { payload: qna }) => ({
      ...state,
      qna,
    }),
    [UPDATE_QNA_FAILURE]: (state, { payload: qnaError }) => ({
      ...state,
      qnaError,
    }),
    [WRITE_REVIEW]: (state) => ({
      ...state,
      review: null,
      reviewError: null,
    }),
    [WRITE_REVIEW_SUCCESS]: (state, { payload: review }) => ({
      ...state,
      review,
    }),
    [WRITE_REVIEW_FAILURE]: (state, { payload: reviewError }) => ({
      ...state,
      reviewError,
    }),
    [SET_ORIGINAL_REVIEW]: (state, { payload: review }) => ({
      ...state,
      title: review.title,
      body: review.body,
      tags: review.tags,
      originalReviewId: review.id,
    }),
    [UPDATE_REVIEW_SUCCESS]: (state, { payload: review }) => ({
      ...state,
      review,
    }),
    [UPDATE_REVIEW_FAILURE]: (state, { payload: reviewError }) => ({
      ...state,
      reviewError,
    }),
    [WRITE_NOTICE]: (state) => ({
      ...state,
      notice: null,
      noticeError: null,
    }),
    [WRITE_NOTICE_SUCCESS]: (state, { payload: notice }) => ({
      ...state,
      notice,
    }),
    [WRITE_NOTICE_FAILURE]: (state, { payload: noticeError }) => ({
      ...state,
      noticeError,
    }),
    [SET_ORIGINAL_NOTICE]: (state, { payload: notice }) => ({
      ...state,
      title: notice.title,
      body: notice.body,
      tags: notice.tags,
      originalNoticeId: notice.id,
    }),
    [UPDATE_NOTICE_SUCCESS]: (state, { payload: notice }) => ({
      ...state,
      notice,
    }),
    [UPDATE_NOTICE_FAILURE]: (state, { payload: noticeError }) => ({
      ...state,
      noticeError,
    }),
    [WRITE_MERCHANDISE]: (state) => ({
      ...state,
      merchandise: null,
      merchandiseError: null,
    }),
    [WRITE_MERCHANDISE_SUCCESS]: (state, { payload: merchandise }) => ({
      ...state,
      merchandise,
    }),
    [WRITE_MERCHANDISE_FAILURE]: (state, { payload: merchandiseError }) => ({
      ...state,
      merchandiseError,
    }),
    [SET_ORIGINAL_MERCHANDISE]: (state, { payload: merchandise }) => ({
      ...state,
      title: merchandise.title,
      body: merchandise.body,
      tags: merchandise.tags,
      originalMerchandiseId: merchandise.id,
    }),
    [UPDATE_MERCHANDISE_SUCCESS]: (state, { payload: merchandise }) => ({
      ...state,
      merchandise,
    }),
    [UPDATE_MERCHANDISE_FAILURE]: (state, { payload: merchandiseError }) => ({
      ...state,
      merchandiseError,
    }),
  },
  initialState
);

export default write;
