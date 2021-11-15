import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

const TEMP_SET_USER = "user/TEMP_SET_USER"; // 새로고침 이후 임시 로그인 처리
// 회원 정보 확인
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createRequestActionTypes("user/CHECK");
const LOGOUT = "user/LOGOUT";

export const tempSetUser = createAction(
  TEMP_SET_USER,
  ({ id, user, nickname }) => ({
    id,
    user,
    nickname,
  })
);
export const check = createAction(CHECK, (access_token) => access_token);
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga() {
  try {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
    localStorage.removeItem("vendorid");
    localStorage.removeItem("vendordomain");
    localStorage.removeItem("nickname");
  } catch (e) {
    console.log("LocalStroage did not delete item");
  }
}

function logoutSaga() {
  // 외부와 연결된 거 아니면 이렇게 하는 건가? 아니면 반복이 아닐 때?
  try {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
    localStorage.removeItem("vendorid");
    localStorage.removeItem("vendordomain");
    localStorage.removeItem("nickname");
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  id: null,
  user: null,
  nickname: null,
  checkError: null,
  access_token: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      id: user.id,
      user: user.user,
      nickname: user.nickname,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      id: user.id,
      user: user.username,
      nickname: user.nickname,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [LOGOUT]: (state) => initialState,
  },
  initialState
);
