import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../../common/BasicDiv";
import { BasicItem } from "../../common/BasicItem";
import Editor from "../../common/Editor";

const MakeQnaMapBlock = styled(BasicDiv)`
  margin: 0px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const MakeQnaMapItem = styled(BasicItem)`
  flex: 1;

  &.writeTitle {
    flex: 0 0 2rem;
    width: 80%;
    align-self: center;
  }
  &.writeInfo {
    flex: 0 0 1rem;
  }
  &.writeContent {
    align-self: center;
    flex: 1;
    width: 80%;
    background-color: ${OpenColor.white};
  }
  &.writeButton {
    flex: 0 0 2rem;
  }
  input {
    width: 100%;
  }
`;

const QnaTextarea = styled.textarea`
  width: 100%;
  height: 3rem;
  margin-top: 0.5rem;
  resize: none;
  border: 1px solid ${OpenColor.gray[4]};
  border-radius: 10px;
  padding: 10px 10px;

  &:focus {
    outline: 0;
  }
`;
const QnaInput = styled.input`
  width: 100%;
  height: 1.25rem;
  margin-top: 0.5rem;
  border: none;
  padding: 3px 10px;

  border-bottom: 1px solid ${OpenColor.gray[4]};

  &:focus {
    outline: 0;
  }
`;

const MakeQna = ({ title, body, onChangeField }) => {
  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };
  const onChangeBody = (e) => {
    onChangeField({ key: "body", value: e.target.value });
  };

  return (
    <MakeQnaMapBlock>
      <MakeQnaMapItem className="writeTitle">
        <QnaInput
          type="text"
          placeholder="제목"
          value={title}
          onChange={onChangeTitle}
        />
      </MakeQnaMapItem>
      <MakeQnaMapItem className="writeContent">
        <QnaTextarea placeholder="내용" value={body} onChange={onChangeBody} />
      </MakeQnaMapItem>
    </MakeQnaMapBlock>
  );
};

export default MakeQna;
