import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../../common/BasicDiv";
import { BasicItem } from "../../common/BasicItem";
import { LinkButton } from "../../common/LinkButton";
import MerchandiseModal from "../../common/MerchandiseModal";
import MerchandiseSlickCarousel from "../../common/MerchandiseSlickCarousel";
import SlickCarousel from "../../common/SlickCarousel";

const ListMerchandiseMapBlock = styled(BasicDiv)`
  margin: 0px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ListMerchandiseMapItem = styled.div`
  margin: 1rem 1rem;
  height: 11rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  border-bottom: 1px solid ${OpenColor.gray[4]};
`;

const ListMerchandiseComponent = styled(BasicItem)`
  &.photo {
    position: relative;
    text-align: left;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 7;
    margin-bottom: 15px;
  }
  &.merchandiseName {
    color: ${OpenColor.gray[7]};
    font-weight: bold;
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 2;
    cursor: pointer;
  }
  &.info {
    color: ${OpenColor.gray[6]};
    font-size: 0.9rem;
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 2;
    grid-row-end: 3;
    cursor: pointer;
  }
  &.desc {
    color: ${OpenColor.gray[6]};

    font-size: 0.75rem;
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 3;
    grid-row-end: 8;
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

const ListMerchandiseMap = ({
  modal,
  merchandise,
  merchandiselist,
  onClickLink,
  onClickClose,
  owner,
}) => {
  return (
    <ListMerchandiseMapBlock>
      {merchandiselist && (
        <div>
          {merchandiselist &&
            merchandiselist.map((merchandise) => (
              <MerchandiseItem
                merchandise={merchandise}
                key={merchandise.id}
                onClickLink={onClickLink}
              />
            ))}
        </div>
      )}
      {merchandise.merchandise && (
        <MerchandiseModal
          owner={owner}
          visible={modal}
          onClickClose={onClickClose}
          merchandise={merchandise.merchandise}
        />
      )}
    </ListMerchandiseMapBlock>
  );
};

export default ListMerchandiseMap;
