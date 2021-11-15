import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import ListMerchandiseContainer from "../containers/merchandise/ListMerchandiseContainer";

const ListMerchandisePageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ListMerchandisePage = () => {
  return (
    <ListMerchandisePageBlock>
      <ListMerchandiseContainer />
    </ListMerchandisePageBlock>
  );
};

export default ListMerchandisePage;
