import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import DetailMerchandiseMapContainer from "../containers/map/merchandise/DetailMerchandiseMapContainer";
import TransactionActionButtonContainer from "../containers/map/merchandise/TransactionActionButtonContainer";
const ViewMerchandisePageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const ViewMerchandisePageItem = styled(BasicItem)`
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

const ViewMerchandisePage = () => {
  return (
    <ViewMerchandisePageBlock>
      <ViewMerchandisePageItem className="viewContent">
        <DetailMerchandiseMapContainer />
      </ViewMerchandisePageItem>
    </ViewMerchandisePageBlock>
  );
};

export default ViewMerchandisePage;
