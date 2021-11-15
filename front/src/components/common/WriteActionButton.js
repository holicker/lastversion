import React from "react";
import styled from "styled-components";
import BasicButton from "./BasicButton";

const WriteActionButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(BasicButton)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButton = ({ type, onPublish, onCancel, isEdit }) => {
  return (
    <WriteActionButtonBlock>
      <StyledButton onClick={onPublish}>
        {type === "qna" && "질문"}
        {type === "merchandise" && "상품"}
        {type === "notice" && "공지"}
        {type === "review" && "리뷰"} {isEdit ? "수정" : "등록"}
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonBlock>
  );
};

export default WriteActionButton;
