import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import ListMerchandiseMapContainer from "../containers/map/merchandise/ListMerchandiseMapContainer";

const ListMerchandiseMapPageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ListMerchandiseMapPage = () => {
  return (
    <ListMerchandiseMapPageBlock>
      <ListMerchandiseMapContainer />
    </ListMerchandiseMapPageBlock>
  );
};

export default ListMerchandiseMapPage;
