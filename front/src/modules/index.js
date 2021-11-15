import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import merchandise, { merchandiseSaga } from "./merchandise";
import merchandiselist, { merchandiseListSaga } from "./merchandiselist";
import notice, { noticeSaga } from "./notice";
import noticelist, { noticeListSaga } from "./noticelist";
import qna, { qnaSaga } from "./qna";
import qnalist, { qnalistSaga } from "./qnalist";
import review, { reviewSaga } from "./review";
import reviewlist, { reviewListSaga } from "./reviewlist";
import search from "./search";
import user, { userSaga } from "./user";
import write, { writeSaga } from "./write";
import vendor, { vendorSaga } from "./vendor";
import chat, { chatSaga } from "./chat";

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  search,
  vendor,
  write,
  qna,
  qnalist,
  review,
  reviewlist,
  notice,
  noticelist,
  merchandise,
  merchandiselist,
  chat,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    writeSaga(),
    vendorSaga(),
    qnaSaga(),
    qnalistSaga(),
    reviewSaga(),
    reviewListSaga(),
    noticeSaga(),
    noticeListSaga(),
    merchandiseSaga(),
    merchandiseListSaga(),
    chatSaga(),
  ]);
}

export default rootReducer;
