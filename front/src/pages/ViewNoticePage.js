import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import ViewQnaMapContainer from "../containers/map/qna/ViewQnaMapContainer";
import ViewNoticeContainer from "../containers/notice/ViewNoticeContainer";
const ViewNoticePageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const ViewNoticePageItem = styled(BasicItem)`
  flex: 1;

  &.viewContent {
    align-self: center;
    flex: 1;
    width: 80%;
    background-color: ${OpenColor.white};
  }
  &.viewButton {
    flex: 0 0 2rem;
  }
`;

const ViewNoticePage = () => {
  return (
    <ViewNoticePageBlock>
      <ViewNoticePageItem className="viewContent">
        <ViewNoticeContainer />
      </ViewNoticePageItem>
      <ViewNoticePageItem className="viewButton"></ViewNoticePageItem>
    </ViewNoticePageBlock>
  );
};

export default ViewNoticePage;
