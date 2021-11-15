import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import ViewQnaMapContainer from "../containers/map/qna/ViewQnaMapContainer";
const ViewQnaPageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const ViewQnaPageItem = styled(BasicItem)`
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

const ViewQnaPage = () => {
  return (
    <ViewQnaPageBlock>
      <ViewQnaPageItem className="viewContent">
        <ViewQnaMapContainer />
      </ViewQnaPageItem>
      <ViewQnaPageItem className="viewButton">

          
      </ViewQnaPageItem>
    </ViewQnaPageBlock>
  );
};

export default ViewQnaPage;
