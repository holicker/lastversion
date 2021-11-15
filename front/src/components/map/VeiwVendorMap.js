import OpenColor from "open-color";
import React, { useEffect } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import ListMerchandiseMapContainer from "../../containers/map/merchandise/ListMerchandiseMapContainer";
import ListQnaMapContainer from "../../containers/map/qna/ListQnaMapContainer";
import ListReviewMapContainer from "../../containers/map/review/ListReviewMapContainer";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import Responsive from "../common/Responsive";
import VendorMenuBar from "../menubar/VendorMenuBar";
import ListQnaMap from "./qna/ListQnaMap";
import ListReviewMap from "./review/ListReviewMap";
import ViewVendorInfoMap from "./ViewVendorInfoMap";

const ViewVendorMapBlock = styled(BasicDiv)`
  position: relative;
  margin: 0px 0px;
  display: ${(props) => (props.viewVendor ? "flex" : "none")};
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ViewVendorMapWrapper = styled(Responsive)`
  width: 90%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const ViewVendorMapItem = styled(BasicItem)`
  &.info {
    flex: 0 0 15rem;

    border-bottom: 1px solid ${OpenColor.gray[4]};
  }

  &.content {
    border: 1px solid ${OpenColor.gray[4]};
    border-radius: 10px;
  }

  &.merchandise {
    display: ${(props) => (props.view ? "block" : "none")};
  }

  &.review {
    display: ${(props) => (props.view ? "block" : "none")};
  }

  &.qna {
    display: ${(props) => (props.view ? "block" : "none")};
  }
`;

const ViewVendorMap = ({
  vendor,
  viewType,
  viewVendor,
  onMenuClick,
  page,
  vendorid,
  reviewlist,
  qnalist,
  owner,
}) => {

  return (
    <ViewVendorMapBlock viewVendor={viewVendor}>
      <ViewVendorMapWrapper>
        <ViewVendorMapItem className="info">
          <ViewVendorInfoMap vendor={vendor} />
        </ViewVendorMapItem>

        <ViewVendorMapItem className="menu">
          <VendorMenuBar onMenuClick={onMenuClick} />
        </ViewVendorMapItem>

        <ViewVendorMapItem
          className="content merchandise"
          view={viewType === "merchandise"}
        >
          <ListMerchandiseMapContainer owner={owner} />
        </ViewVendorMapItem>
        <ViewVendorMapItem
          className="content review"
          view={viewType === "review"}
        >
          <ListReviewMap
            page={page}
            vendorid={vendorid}
            vendor={vendor}
            reviewlist={reviewlist}
            owner={owner}
          />
        </ViewVendorMapItem>
        <ViewVendorMapItem className="content qna" view={viewType === "qna"}>
          <ListQnaMap
            page={page}
            vendorid={vendorid}
            vendor={vendor}
            qnalist={qnalist}
            owner={owner}
          />
        </ViewVendorMapItem>
      </ViewVendorMapWrapper>
    </ViewVendorMapBlock>
  );
};

export default withRouter(ViewVendorMap);
