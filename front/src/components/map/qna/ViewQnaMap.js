import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "../../common/BasicButton";
import { BasicDiv } from "../../common/BasicDiv";

const ViewQnaMapBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ViewQnaMapItem = styled.div`
  margin: 1rem 1rem;
  flex-direction: column;
  display: flex;

  &.button {
    flex-direction: row;
  }
`;

const ViewQnaMap = ({ qna, error, loading, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <ViewQnaMapBlock>존재하지 않는 포스트입니다.</ViewQnaMapBlock>;
    }
    return <ViewQnaMapBlock>오류 발생!</ViewQnaMapBlock>;
  }

  if (loading || !qna) {
    return null;
  }

  const { title, body, writer, registerdDate } = qna;
  return (
    <ViewQnaMapBlock>
      <ViewQnaMapItem className="title">{title}</ViewQnaMapItem>
      <ViewQnaMapItem className="info">
        {registerdDate} / {writer}
      </ViewQnaMapItem>
      <ViewQnaMapItem className="content">{body}</ViewQnaMapItem>
      <ViewQnaMapItem className="reply">답변</ViewQnaMapItem>
      <ViewQnaMapItem className="button">
        <BasicButton>답글달기/수정</BasicButton>
        <BasicButton>뒤로 가기</BasicButton>
        <BasicButton>삭제</BasicButton>
      </ViewQnaMapItem>
    </ViewQnaMapBlock>
  );
};

export default ViewQnaMap;
