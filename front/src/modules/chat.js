import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as chatAPI from "../lib/api/chat";
import { take, takeLatest } from "@redux-saga/core/effects";

const INITIALIZE_CHAT = "chat/INITIALIZE_CHAT";
const INITIALIZE_CHATLIST = "chat/INITIALIZE_CHATLIST";
const [INFO_CHAT, INFO_CHAT_SUCCESS, INFO_CHAT_FAILURE] =
  createRequestActionTypes("chat/INFO_CHAT");
const [CHECK_CHAT, CHECK_CHAT_SUCCESS, CHECK_CHAT_FAILURE] =
  createRequestActionTypes("chat/CHECK_CHAT");
const [LIST_CHAT_BUYER, LIST_CHAT_BUYER_SUCCESS, LIST_CHAT_BUYER_FAILURE] =
  createRequestActionTypes("chat/LIST_CHAT_BUYER");
const [LIST_CHAT_SELLER, LIST_CHAT_SELLER_SUCCESS, LIST_CHAT_SELLER_FAILURE] =
  createRequestActionTypes("chat/LIST_CHAT_SELLER");

export const initializeChat = createAction(INITIALIZE_CHAT);
export const initializeChatlist = createAction(INITIALIZE_CHATLIST);
export const infoChat = createAction(INFO_CHAT, (roomid) => roomid);
export const checkChat = createAction(
  CHECK_CHAT,
  ({ vendordomain, merchandiseid, buyernickname, buyerid }) => ({
    vendordomain,
    merchandiseid,
    buyernickname,
    buyerid,
  })
);

export const listChatBuyer = createAction(LIST_CHAT_BUYER, ({ id }) => ({
  id,
}));
export const listChatSeller = createAction(LIST_CHAT_SELLER, ({ id }) => ({
  id,
}));

const checkChatSaga = createRequestSaga(CHECK_CHAT, chatAPI.checkChat);
const infoChatSaga = createRequestSaga(INFO_CHAT, chatAPI.infoChat);
const listChatBuyerSaga = createRequestSaga(
  LIST_CHAT_BUYER,
  chatAPI.listChatBuyer
);
const listChatSellerSaga = createRequestSaga(
  LIST_CHAT_SELLER,
  chatAPI.listChatSeller
);

export function* chatSaga() {
  yield takeLatest(CHECK_CHAT, checkChatSaga);
  yield takeLatest(INFO_CHAT, infoChatSaga);
  yield takeLatest(LIST_CHAT_BUYER, listChatBuyerSaga);
  yield takeLatest(LIST_CHAT_SELLER, listChatSellerSaga);
}

const initialState = {
  roomid: null,
  vendordomain: null,
  merchandiseid: null,
  roomname: null, // roomname은 우선 merchandisename으로
  sellernickname: null,
  sellerid: null,
  buyernickname: null,
  buyerid: null,
  chatstatus: null,
  chatError: null,
  buyerlist: null,
  sellerlist: null,
};

const chat = handleActions(
  {
    [INITIALIZE_CHAT]: (state) => initialState,
    [INITIALIZE_CHATLIST]: (state, action) => ({
      ...state,
      buyerlist: null,
      sellerlist: null,
    }),
    [CHECK_CHAT_SUCCESS]: (state, { payload: chat }) => ({
      ...state,
      roomid: chat.roomId,
      vendordomain: chat.vendorDomain,
      merchandiseid: chat.merchandiseId,
      roomname: chat.roomName,
      sellernickname: chat.sellerNickname,
      buyernickname: chat.buyerNickname,
      buyerid: chat.buyerId,
      sellerid: chat.sellerId,
    }),
    [CHECK_CHAT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      chatError: error,
    }),
    [INFO_CHAT_SUCCESS]: (state, { payload: chat }) => ({
      ...state,
      roomid: chat.roomId,
      vendordomain: chat.vendorDomain,
      merchandiseid: chat.merchandiseId,
      roomname: chat.roomName,
      sellernickname: chat.sellerNickname,
      buyernickname: chat.buyerNickname,
      buyerid: chat.buyerId,
      sellerid: chat.sellerId,
    }),
    [INFO_CHAT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      chatError: error,
    }),
    [LIST_CHAT_BUYER_SUCCESS]: (state, { payload: buyerlist }) => ({
      ...state,
      buyerlist,
    }),
    [LIST_CHAT_BUYER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      chatError: error,
    }),
    [LIST_CHAT_SELLER_SUCCESS]: (state, { payload: sellerlist }) => ({
      ...state,
      sellerlist,
    }),
    [LIST_CHAT_SELLER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      chatError: error,
    }),
  },
  initialState
);

export default chat;
