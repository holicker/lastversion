import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";

const ListTransactionBlock = styled(BasicDiv)`
  margin: 0px 0px;
  display: flex;
  justify-content: center;
  height: 100%;
  max-height: 90vh;
`;

const ListTransactionItem = styled(BasicItem)`
  width: 100%;
  flex: 1;
  color: ${OpenColor.gray[7]};

  &.left {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  &.center {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  &.right {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  &.title {
    flex: 0 0 2rem;
    font-weight: 900;
    border-bottom: 1px solid ${OpenColor.gray[4]};
  }
  &.button {
    flex: 0 0 2rem;
  }

  &.list {
    flex: 1 0 35rem;
    margin-top: 10px;
    justify-content: flex-start;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }

  &.prepare {
    flex: 1 0 35rem;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid ${OpenColor.gray[4]};
    border-radius: 20px;
  }
`;

const TransactionBlock = styled(BasicItem)`
  padding: 1rem;
  flex: 0 0 4rem;
  flex-direction: column;
  border: 1px solid ${OpenColor.gray[4]};
  border-radius: 20px;
  margin: 10px;
`;
const Transaction = styled(BasicItem)`
  color: ${OpenColor.gray[6]};
  cursor: pointer;

  &.info {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${OpenColor.gray[4]};
  }
  &.title {
    flex: 1;
    color: ${OpenColor.gray[7]};
    justify-content: flex-start;
  }
  &.partner {
    font-size: 13px;
    flex: 1;
    color: ${OpenColor.gray[7]};
    justify-content: flex-end;
    padding: 4px 0 0 0;
  }

  &.message {
    font-size: 0.9rem;
    margin-top: 10px;
    justify-content: flex-start;
  }
`;

const TransactionItem = ({ chat, type, enterChatting, nickname }) => {
  console.log(`chat messages ${chat.roomId}, ${chat.messages.length === 0}`);

  return (
    <TransactionBlock onClick={() => enterChatting(chat.roomId)}>
      <Transaction className="info">
        <Transaction className="title">{chat.roomName}</Transaction>
        <Transaction className="partner">
          with {type === "buyer" ? chat.sellerNickname : chat.buyerNickname}
        </Transaction>
      </Transaction>
      <Transaction className="message">
        {chat.messages.length !== 0 &&
          chat.messages.slice(-1)[0].writer !== nickname &&
          chat.messages.slice(-1)[0].writer + " : "}
        {chat.messages.length !== 0 &&
          chat.messages.slice(-1)[0].writer === nickname &&
          "나 : "}

        {chat.messages.length !== 0 && chat.messages.slice(-1)[0].message}
      </Transaction>
    </TransactionBlock>
  );
};

const ListTransaction = ({
  sellerlist,
  buyerlist,
  enterChatting,
  nickname,
}) => {
  return (
    <ListTransactionBlock>
      <ListTransactionItem className="left">
        <ListTransactionItem className="title">
          완료된 거래 목록
        </ListTransactionItem>

        <ListTransactionItem className="prepare">
          <h4>현재 준비 중입니다.</h4>
        </ListTransactionItem>
      </ListTransactionItem>

      <ListTransactionItem className="center">
        <ListTransactionItem className="title">
          구매 대화 목록
        </ListTransactionItem>

        <ListTransactionItem className="list">
          {buyerlist &&
            buyerlist.map((chat) => (
              <TransactionItem
                key={chat.roomId}
                chat={chat}
                type="buyer"
                enterChatting={enterChatting}
                nickname={nickname}
              />
            ))}
        </ListTransactionItem>
      </ListTransactionItem>
      <ListTransactionItem className="right">
        <ListTransactionItem className="title">
          판매 대화 목록
        </ListTransactionItem>
        <ListTransactionItem className="list">
          {sellerlist &&
            sellerlist.map((chat) => (
              <TransactionItem
                key={chat.roomId}
                chat={chat}
                type="seller"
                enterChatting={enterChatting}
                nickname={nickname}
              />
            ))}
        </ListTransactionItem>
      </ListTransactionItem>
    </ListTransactionBlock>
  );
};

export default ListTransaction;
