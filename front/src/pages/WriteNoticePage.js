import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import WriteNoticeActionButtonContainer from "../containers/notice/WriteNoticeActionButtonContainer";
import WriteNoticeContainer from "../containers/notice/WriteNoticeContainer";
const WriteNoticePageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const WriteNoticePageItem = styled(BasicItem)`
  flex: 1;

  &.writeContent {
    align-self: center;
    flex: 1;
    width: 80%;
    background-color: ${OpenColor.white};
  }
  &.writeButton {
    flex: 0 0 2rem;
  }
`;

const WriteNoticePage = () => {
  return (
    <WriteNoticePageBlock>
      <WriteNoticePageItem className="writeContent">
        <WriteNoticeContainer />
      </WriteNoticePageItem>
      <WriteNoticePageItem className="writeButton">
        <WriteNoticeActionButtonContainer />
      </WriteNoticePageItem>
    </WriteNoticePageBlock>
  );
};

export default WriteNoticePage;
