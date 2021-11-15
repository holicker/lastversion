import OpenColor from "open-color";
import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import MakeReviewActionButtonContainer from "../containers/map/review/MakeReviewActionButtonContainer";
import MakeReviewMapContainer from "../containers/map/review/MakeReviewMapContainer";
const MakeReviewPageBlock = styled(BasicDiv)`
  margin: 0;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MakeReviewPageItem = styled(BasicItem)`
  flex: 1;

  &.writeContent {
    flex: 1;
    width: 80%;
    background-color: ${OpenColor.white};
  }
  &.writeButton {
    flex: 0 0 1rem;
    width: 70%;
    border-bottom: 1px solid ${OpenColor.gray[4]};
  }
`;

const MakeReviewPage = ({ vendorid, vendor, onToggleClick }) => {
  return (
    <MakeReviewPageBlock>
      <MakeReviewPageItem className="writeContent">
        <MakeReviewMapContainer />
      </MakeReviewPageItem>
      <MakeReviewPageItem className="writeButton">
        <MakeReviewActionButtonContainer
          vendorid={vendorid}
          vendor={vendor}
          onToggleClick={onToggleClick}
        />
      </MakeReviewPageItem>
    </MakeReviewPageBlock>
  );
};

export default withRouter(MakeReviewPage);
