import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import TransactionActionButtonContainer from "../../containers/map/merchandise/TransactionActionButtonContainer";
import BasicButton from "./BasicButton";
import { BasicDiv } from "./BasicDiv";
import { BasicItem } from "./BasicItem";
import MerchandisePopupSlickCarousel from "./MerchandisePopupSlickCarousel";
const Fullscreen = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MerchandiseModalBlock = styled.div`
  height: 60vh;
  width: 40vw;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailMerchandiseMapBlock = styled(BasicDiv)`
  width: 80%;
`;

const DetailMerchandiseMapItem = styled(BasicItem)`
  flex: 1;
  color: ${OpenColor.gray[7]};

  &.photo {
    flex: 0 0 20rem;
  }
  &.title {
    flex: 0 0 3rem;
    border-bottom: 1px solid ${OpenColor.gray[4]};
  }
  &.info {
    flex: 0 0 2rem;
  }
  &.desc {
    display: inline-block;
    width: 100%;
    text-align: left;
    border: 1px solid ${OpenColor.gray[4]};
    border-radius: 15px;
    margin-top: 1rem;
    flex: 1 0 10rem;
    min-height: 15rem;

    h5 {
      padding: 0;
      margin: 20px;
    }
  }
  &.button {
    margin-top: 10px;
    flex: 0 0 2rem;
  }
`;

const StyledButton = styled(BasicButton)`
  height: 2rem;
`;

const MerchandiseModal = ({ visible, merchandise, onClickClose, owner }) => {
  const {
    merchandiseName: title,
    merchandiseDescription: body,
    merchandisePrice: price,
    pictures,
    registerdDate: registeredDate,
  } = merchandise;

  if (!visible) return null;

  return (
    <Fullscreen>
      <MerchandiseModalBlock>
        <DetailMerchandiseMapBlock>
          <DetailMerchandiseMapItem className="photo">
            <MerchandisePopupSlickCarousel
              type="merchandise"
              images={pictures}
            />
          </DetailMerchandiseMapItem>
          <DetailMerchandiseMapItem className="title">
            {title}
          </DetailMerchandiseMapItem>
          <DetailMerchandiseMapItem className="info">
            {price} / {registeredDate}
          </DetailMerchandiseMapItem>
          <DetailMerchandiseMapItem className="desc">
            <h5>{body}</h5>
          </DetailMerchandiseMapItem>
          <DetailMerchandiseMapItem className="button">
            {!owner && <TransactionActionButtonContainer />}
            <StyledButton onClick={onClickClose}>닫기</StyledButton>
          </DetailMerchandiseMapItem>
        </DetailMerchandiseMapBlock>
      </MerchandiseModalBlock>
    </Fullscreen>
  );
};

export default MerchandiseModal;
