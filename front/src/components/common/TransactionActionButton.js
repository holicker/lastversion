import React, { useState } from "react";
import OpenColor from "open-color";
import styled, { css } from "styled-components";
import AskRemoveModal from "../map/qna/AskRemoveModal";

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  color: white;
  outline: none;
  cursor: pointer;
  text-decoration: none;

  background: ${OpenColor.orange[7]};
  &:hover {
    background: ${OpenColor.orange[4]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  &:disabled {
    background: ${OpenColor.gray[3]};
    color: ${OpenColor.gray[5]};
    cursor: not-allowed;
  }
`;

const TransactionActionButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const ActionButton = styled.button`
  ${buttonStyle}
  margin-right: 5px;
`;

const TransactionActionButton = ({ askTransAction }) => {
  return <ActionButton onClick={askTransAction}>거래 요청</ActionButton>;
};

export default TransactionActionButton;
