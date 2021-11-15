import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
const PrepareItem = styled.div`
  text-align: center;
  font-weight: 900;
  color: ${OpenColor.gray[7]};
`;
const PreparePage = () => {
  return <PrepareItem>준비 중입니다.</PrepareItem>;
};

export default PreparePage;
