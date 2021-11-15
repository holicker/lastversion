import OpenColor from "open-color";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import NaverMapAPI from "../../lib/map/NaverMapAPI";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import Responsive from "../common/Responsive";
import ViewVendorMap from "./VeiwVendorMap";

const VendorMapBlock = styled(BasicDiv)`
  margin: 0px 0px;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const VendorMapWrapper = styled(Responsive)`
  display: flex;
  background-color: white;
`;

const VendorMapItem = styled(BasicItem)`
  flex: 1;

  &.left {
    width: 50%;
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  &.map {
    display: block;
    flex: 0 0 60vh;
  }

  &.blank {
    flex: 1;
  }
  &.right {
    width: 50%;
    flex: ${(props) => (props.viewVendor ? 1 : 0)};
  }
`;

const VendorMap = ({
  vendorlist,
  vendor,
  onMenuClick,
  onChangeField,
  onMarkerClick,
  viewType,
  lat,
  lng,
  page,
  vendorid,
  reviewlist,
  qnalist,
  owner,
}) => {
  const [viewVendor, setViewVendor] = useState(false);

  useEffect(() => {
    vendor && setViewVendor(true);
  }, [vendor]);

  useEffect(() => {
    return setViewVendor(false);
  }, []);

  return (
    <VendorMapBlock>
      <VendorMapWrapper>
        <VendorMapItem className="left">
          <VendorMapItem className="map">
            <NaverMapAPI
              vendorlist={vendorlist}
              onChangeField={onChangeField}
              onMarkerClick={onMarkerClick}
              lng={lng}
              lat={lat}
            />
          </VendorMapItem>
          <VendorMapItem className="blank"></VendorMapItem>
        </VendorMapItem>
        <VendorMapItem className="right" viewVendor={viewVendor}>
          <ViewVendorMap
            vendor={vendor}
            onMenuClick={onMenuClick}
            viewType={viewType}
            viewVendor={viewVendor}
            page={page}
            reviewlist={reviewlist}
            qnalist={qnalist}
            vendorid={vendorid}
            owner={owner}
          />
        </VendorMapItem>
      </VendorMapWrapper>
    </VendorMapBlock>
  );
};

export default withRouter(VendorMap);
