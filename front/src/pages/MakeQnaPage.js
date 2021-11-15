import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "../components/common/BasicButton";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import MakeQnaActionButtonContainer from "../containers/map/qna/MakeQnaActionButtonContainer";
import MakeQnaMapContainer from "../containers/map/qna/MakeQnaMapContainer";
const MakeQnaPageBlock = styled(BasicDiv)`
  margin: 0;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MakeQnaPageItem = styled(BasicItem)`
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

const MakeQnaPage = ({ vendorid, vendor, onToggleClick }) => {
  return (
    <MakeQnaPageBlock>
      <MakeQnaPageItem className="writeContent">
        <MakeQnaMapContainer />
      </MakeQnaPageItem>
      <MakeQnaPageItem className="writeButton">
        <MakeQnaActionButtonContainer
          vendorid={vendorid}
          vendor={vendor}
          onToggleClick={onToggleClick}
        />
      </MakeQnaPageItem>
    </MakeQnaPageBlock>
  );
};

export default MakeQnaPage;
