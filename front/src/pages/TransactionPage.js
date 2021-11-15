import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import ListTransactionContainer from "../containers/transaction/ListTransactionContainer";

const TransactionPageBlock = styled(BasicDiv)``;

const TransactionPage = ({ match, history }) => {
  return (
    <TransactionPageBlock>
      <ListTransactionContainer />
    </TransactionPageBlock>
  );
};

export default TransactionPage;
