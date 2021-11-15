import OpenColor from "open-color";
import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import { BasicDiv } from "../../common/BasicDiv";
import { BasicItem } from "../../common/BasicItem";

const DetailMerchandiseMapBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

const DetailMerchandiseMapItem = styled(BasicItem)`
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

const DetailMerchandiseMap = ({
  merchandise,
  loading,
  error,
  actionButtons,
}) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return (
        <DetailMerchandiseMapBlock>
          존재하지 않는 포스트입니다.
        </DetailMerchandiseMapBlock>
      );
    }
    return <DetailMerchandiseMapBlock>오류 발생!</DetailMerchandiseMapBlock>;
  }

  if (loading || !merchandise) {
    return null;
  }

  console.log(`Detail merchandise : ${JSON.stringify(merchandise)}`);

  const {
    merchandiseName: title,
    merchandiseDecription: body,
    merchandisePrice: price,
    currentDate: registeredDate,
  } = merchandise;

  return (
    <DetailMerchandiseMapBlock>
      <DetailMerchandiseMapItem className="photo">
        사진
      </DetailMerchandiseMapItem>
      <DetailMerchandiseMapItem className="title">
        {title}
      </DetailMerchandiseMapItem>
      <DetailMerchandiseMapItem className="info">
        {price} / {registeredDate}
      </DetailMerchandiseMapItem>
      <DetailMerchandiseMapItem className="desc">
        {body}
      </DetailMerchandiseMapItem>

      <DetailMerchandiseMapItem className="button">
        {/*   {actionButtons} */}
      </DetailMerchandiseMapItem>
    </DetailMerchandiseMapBlock>
  );
};

export default withRouter(DetailMerchandiseMap);
