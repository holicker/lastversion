import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import VendorMapContainer from "../containers/map/VendorMapContainer";

const MapPageBlock = styled(BasicDiv)``;

const MapPage = () => {
  return (
    <MapPageBlock>
      <VendorMapContainer />
    </MapPageBlock>
  );
};

export default MapPage;
