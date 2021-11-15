import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";

const VendorMainMapBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  width: 100%;
`;

// const VendorMainMapItem = styled(BasicItem)`
//   flex: 1;
// `;

const VendorMainMap = ({match}) => {
    console.log(`vendormain : ${match.params}`)
    const {vendorid} = match.params
  return (
    <VendorMainMapBlock>
        {vendorid}의 벤더 메인
        벤더 메인에는 설명이랑 주소 정도가 필요할 듯.
        영업중 여부
        근데 굳이 필요 없을 지도.
        제목 밑에로 옮겨두는 게 나을 수도 있겠다.
    </VendorMainMapBlock>
  );
};

export default VendorMainMap;
