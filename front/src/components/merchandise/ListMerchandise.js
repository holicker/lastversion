import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import MerchandiseModal from "../common/MerchandiseModal";
import MerchandiseSlickCarousel from "../common/MerchandiseSlickCarousel";

const ListMerchandiseBlock = styled(BasicDiv)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  max-height: 100vh;
  width: 100%;
`;

const MerchandiseTitleBlock = styled(BasicItem)`
  padding: 0 2rem;
  flex-direction: column;
  flex: 0 0 2rem;
  text-align: center;
  vertical-align: center;
  h5 {
    color: ${OpenColor.gray[7]};
    font-size: 1rem;
    margin: 0;
    padding: 5px;
    border-bottom: 1px solid ${OpenColor.gray[4]};
  }
`;

const MerchandiseContentBlock = styled(BasicItem)`
  display: flex;
  flex: 1;
  margin: 1rem 3rem;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const ListMerchandiseMapItem = styled.div`
  margin: 1rem 1rem;
  min-height: 11rem;
  min-width: 12rem;
  display: flex;
  border: 1px solid ${OpenColor.gray[4]};
  flex-direction: column;
  padding: 5px;
  border-radius: 10px;
  &.button {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      color: ${OpenColor.gray[7]};
    }
    div {
      border-radius: 20px;
      border: 1px dotted ${OpenColor.gray[4]};
      cursor: pointer;
      width: 80%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const ListMerchandiseComponent = styled(BasicItem)`
  &.photo {
    position: relative;
    text-align: left;
  }
  &.merchandiseName {
    color: ${OpenColor.gray[7]};
    font-weight: bold;
    cursor: pointer;
  }
  &.info {
    color: ${OpenColor.gray[6]};
    font-size: 0.9rem;
    cursor: pointer;
  }
  &.desc {
    color: ${OpenColor.gray[6]};

    font-size: 0.75rem;
    cursor: pointer;
  }
  p {
    justify-items: left;
    margin: 0;
    padding: 0;
  }
  h4 {
    text-align: left;
    margin: 0;
    padding: 0;
  }
`;

const MerchandiseItem = ({ merchandise, onClickLink }) => {
  const { id, merchandiseName, merchandisePrice, registerdDate, pictures } =
    merchandise;
  return (
    // 이렇게 매개변수가 있는 놈은 새롭게 함수를 지정해줘야 하는 듯.
    <ListMerchandiseMapItem>
      <ListMerchandiseComponent className="photo">
        <MerchandiseSlickCarousel type="merchandise" images={pictures} />
      </ListMerchandiseComponent>

      <ListMerchandiseComponent
        className="merchandiseName"
        onClick={() => onClickLink(id)}
      >
        <h4>{merchandiseName}</h4>
      </ListMerchandiseComponent>
      <ListMerchandiseComponent
        className="info"
        onClick={() => onClickLink(id)}
      >
        <p>{merchandisePrice}원</p>
      </ListMerchandiseComponent>
      <ListMerchandiseComponent
        className="desc"
        onClick={() => onClickLink(id)}
      >
        <p>{registerdDate} </p>
      </ListMerchandiseComponent>
    </ListMerchandiseMapItem>
  );
};

const ListMerchandise = ({
  list,
  merchandise,
  modal,
  owner,
  onClickLink,
  onClickClose,
  writeToggle,
}) => {
  return (
    <ListMerchandiseBlock>
      <MerchandiseTitleBlock className="title">
        <h5>등록 물품 리스트</h5>
      </MerchandiseTitleBlock>
      <MerchandiseContentBlock>
        <ListMerchandiseMapItem className="button">
          <div onClick={writeToggle}>
            <span>새 상품 등록</span>
          </div>
        </ListMerchandiseMapItem>
        {list &&
          list.map((merchandise) => (
            <MerchandiseItem
              merchandise={merchandise}
              key={merchandise.id}
              onClickLink={onClickLink}
            />
          ))}
        {merchandise.merchandise && (
          <MerchandiseModal
            owner={owner}
            visible={modal}
            onClickClose={onClickClose}
            merchandise={merchandise.merchandise}
          />
        )}
      </MerchandiseContentBlock>
    </ListMerchandiseBlock>
  );
};

export default ListMerchandise;
