import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "../common/BasicButton";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import Editor from "../common/Editor";

const WriteNoticeBlock = styled(BasicDiv)`
  margin: 0px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const WriteNoticeItem = styled(BasicItem)`
  flex: 1;

  &.writeTitle {
    flex: 0 0 3rem;
    width: 80%;
    align-self: center;
    border: 1px solid ${OpenColor.gray[5]};
    border-radius: 10px;
    margin-bottom: 10px;
  }
  &.writeInfo {
    flex: 0 0 1rem;
  }
  &.writeContent {
    color: black;
    align-self: center;
    flex: 1;
    width: 80%;
    background-color: ${OpenColor.white};
  }
  &.writeButton {
    flex: 0 0 2rem;
  }
  input {
    border: none;
    width: 100%;
    margin: 10px;
  }

  input:focus {
    outline: none;
  }
`;

const WriteNotice = ({ title, body, onChangeField }) => {
  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };

  return (
    <WriteNoticeBlock>
      <WriteNoticeItem className="writeTitle">
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={onChangeTitle}
        />
      </WriteNoticeItem>
      <WriteNoticeItem className="writeContent">
        <Editor onChangeField={onChangeField} body={body} />
      </WriteNoticeItem>
    </WriteNoticeBlock>
  );
};

export default WriteNotice;
