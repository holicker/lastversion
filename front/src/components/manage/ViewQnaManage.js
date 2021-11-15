import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "../common/BasicButton";
import { BasicDiv } from "../common/BasicDiv";

const ViewQnaManageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ViewQnaManageItem = styled.div`
  margin: 1rem 1rem;
  flex-direction: column;
  display: flex;

  &.button {
    flex-direction: row;
  }
`;

const ViewQnaManage = ({ match, history }) => {
  return (
    <ViewQnaManageBlock>
      <ViewQnaManageItem className="title">제목</ViewQnaManageItem>
      <ViewQnaManageItem className="info">인포</ViewQnaManageItem>
      <ViewQnaManageItem className="content">내용</ViewQnaManageItem>
      <ViewQnaManageItem className="reply">답변</ViewQnaManageItem>
      <ViewQnaManageItem className="button">
        <BasicButton>답글달기/수정</BasicButton>
        <BasicButton onClick={() => history.goBack()}>뒤로 가기</BasicButton>
        <BasicButton>삭제</BasicButton>
      </ViewQnaManageItem>
    </ViewQnaManageBlock>
  );
};

export default ViewQnaManage;
