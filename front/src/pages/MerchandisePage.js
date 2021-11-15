import OpenColor from "open-color";
import React, { useState } from "react";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import Responsive from "../components/common/Responsive";
import ListMerchandiseContainer from "../containers/merchandise/ListMerchandiseContainer";
import RegisterMerchandisePage from "./RegisterMerchandisePage";
import ViewMerchandisePage from "./ViewMerchandisePage";
const MerchandisePageBlock = styled(BasicDiv)`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
  width: 100%;
`;
const MerchandisePageWrapper = styled(Responsive)`
  display: flex;
  justify-content: center;
  height: 80%;
  max-height: 100vh;
  width: 80%;
`;

const MerchandisePageItem = styled(BasicItem)`
  &.left {
    display: flex;
    flex: 1;
    overflow: auto;
  }

  &.right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 0.85;
  }

  &.write {
    display: ${(props) => (props.writeView ? "flex" : "none")};
  }
  &.merchandise {
    display: ${(props) => (props.merchandiseView ? "flex" : "none")};
  }
`;
const MerchandiseBlock = styled(BasicItem)`
  border: 1px solid black;
  padding: 1rem;
  flex: 0 0 14rem;
  height: 10rem;
  flex-direction: column;
`;
const Merchandise = styled(BasicItem)``;

const MerchandiseItem = ({ onClick }) => {
  return (
    <MerchandiseBlock onClick={onClick}>
      <Merchandise className="photo">사진</Merchandise>
      <Merchandise className="title">상품 제목</Merchandise>
      <Merchandise className="info">가격 및 정보</Merchandise>
      <Merchandise className="desc">내용</Merchandise>
    </MerchandiseBlock>
  );
};

const MerchandisePage = ({ match, history }) => {
  const [writeView, setWriteView] = useState(false);

  const writeToggle = () => {
    setWriteView(!writeView);
  };

  return (
    <MerchandisePageBlock>
      <MerchandisePageWrapper>
        <MerchandisePageItem className="left">
          <ListMerchandiseContainer writeToggle={writeToggle} />
        </MerchandisePageItem>
        <MerchandisePageItem className="right write" writeView={writeView}>
          <RegisterMerchandisePage writeToggle={writeToggle} />
        </MerchandisePageItem>
      </MerchandisePageWrapper>
    </MerchandisePageBlock>
  );
};

export default MerchandisePage;
