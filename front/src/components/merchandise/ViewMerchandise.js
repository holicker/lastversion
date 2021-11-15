import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "../common/BasicButton";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";

const VeiwMerchandiseBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

const VeiwMerchandiseItem = styled(BasicItem)`
  flex: 1;

  &.photo {
    flex: 0 0 20rem;
  }
  &.title {
    flex: 0 0 3rem;
  }
  &.info {
    flex: 0 0 2rem;
  }
  &.desc {
    flex: 1 0 3rem;
  }
  &.button {
    flex: 0 0 2rem;
  }
`;


const VeiwMerchandise = ({ match, history }) => {
  
  const BackButtonClick = () => {
    history.goBack();
  };
  return (
    <VeiwMerchandiseBlock>
      <VeiwMerchandiseItem className="photo">
        사진
      </VeiwMerchandiseItem>
      <VeiwMerchandiseItem className="title">
        제목
      </VeiwMerchandiseItem>
      <VeiwMerchandiseItem className="info">
        가격 등 정보
      </VeiwMerchandiseItem>
      <VeiwMerchandiseItem className="desc">
    뷰 화면
      </VeiwMerchandiseItem>

      <VeiwMerchandiseItem className="button">
        <BasicButton onClick={() => BackButtonClick()}>뒤로가기</BasicButton>
        <BasicButton>거래요청</BasicButton>
        <BasicButton>수정하기</BasicButton>
        <BasicButton>삭제하기</BasicButton>
        <BasicButton>물품 숨기기</BasicButton>
      </VeiwMerchandiseItem>
    </VeiwMerchandiseBlock>
  );
};

export default VeiwMerchandise;
