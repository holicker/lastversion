import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import ListTransaction from "../../components/transaction/ListTransaction";
import {
  initializeChatlist,
  listChatBuyer,
  listChatSeller,
} from "../../modules/chat";

const ListTransactionContainer = ({ history }) => {
  const { id, nickname, buyerlist, sellerlist } = useSelector(
    ({ user, chat }) => ({
      id: user.id,
      nickname: user.nickname,
      buyerlist: chat.buyerlist,
      sellerlist: chat.sellerlist,
    })
  );

  const dispatch = useDispatch();

  const enterChatting = useCallback(
    (roomid) => {
      console.log(`roomid : ${roomid}`);
      history.push(`/chat/${roomid}`);
    },
    [history]
  );

  useEffect(() => {
    dispatch(listChatBuyer({ id }));
    dispatch(listChatSeller({ id }));
    return dispatch(initializeChatlist());
  }, [dispatch]);

  return (
    <ListTransaction
      sellerlist={sellerlist}
      buyerlist={buyerlist}
      enterChatting={enterChatting}
      nickname={nickname}
    />
  );
};

export default withRouter(ListTransactionContainer);
