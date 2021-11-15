import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import SlickCarousel from "../common/SlickCarousel";

const ViewVendorInfoMapBlock = styled(BasicDiv)`
  position: relative;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

`;

const ViewVendorInfoMapItem = styled(BasicItem)`
  color: ${OpenColor.gray[7]};
  &.title {
    margin: 20px;
    border-bottom: 1px solid ${OpenColor.gray[4]};
  }
`;

const ViewVendorInfoMap = ({ vendor }) => {
  return (
    <ViewVendorInfoMapBlock>
      <ViewVendorInfoMapItem className="title">
        {vendor && vendor.vendorName}
      </ViewVendorInfoMapItem>
      <ViewVendorInfoMapItem className="image">
        {vendor && <SlickCarousel type="vendor" images={vendor.pictures} />}
      </ViewVendorInfoMapItem>
      <ViewVendorInfoMapItem className="desc">
        {vendor && vendor.vendorInfo}
      </ViewVendorInfoMapItem>
    </ViewVendorInfoMapBlock>
  );
};

export default ViewVendorInfoMap;
