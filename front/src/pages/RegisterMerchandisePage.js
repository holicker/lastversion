import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import RegisterMerchandiseContainer from "../containers/merchandise/RegisterMerchandiseContainer";

const RegisterMerchandisePageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RegisterMerchandisePage = ({ writeToggle }) => {
  return (
    <RegisterMerchandisePageBlock>
      <RegisterMerchandiseContainer writeToggle={writeToggle} />
    </RegisterMerchandisePageBlock>
  );
};

export default RegisterMerchandisePage;
