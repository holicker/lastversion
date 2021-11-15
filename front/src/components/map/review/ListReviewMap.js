import OpenColor from "open-color";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import styled from "styled-components";
import { reviewList } from "../../../modules/reviewlist";
import MakeReviewPage from "../../../pages/MakeReviewPage";
import { BasicDiv } from "../../common/BasicDiv";
import { BasicItem } from "../../common/BasicItem";

const ListReviewMapBlock = styled(BasicDiv)`
  margin: 0px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ListReviewMapItem = styled.div`
  width: 30rem;
  margin: 1rem 1rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListReviewItem = styled.div`
  margin: 0.5rem 0;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 60%;
  border: 1px solid ${OpenColor.gray[4]};
  border-radius: 10px;
  text-align: center;
`;

const ListReviewToggle = styled.div`
  margin: 20px;
  width: 50%;
  height: 100%;
  border: 1px dashed ${OpenColor.gray[4]};
  border-radius: 20px;
  color: ${OpenColor.gray[5]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ListReviewComponent = styled(BasicItem)`
  color: ${OpenColor.gray[7]};
  &.title {
    display: flex;
    justify-content: center;
  }
  &.info {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${OpenColor.gray[4]};
    padding: 0 0 3px 0;
  }
  &.desc {
    display: flex;
    justify-content: space-between;
  }

  h4 {
    text-align: left;
    display: inline-block;
    margin: 0;
    padding: 0;
  }
  h5 {
    text-align: left;
    display: inline-block;
    margin: 0;
    padding: 0;
    margin-top: 5px;
  }
`;

const ReviewItem = ({ review }) => {
  const { title, body, writer, registerdDate } = review;
  return (
    <ListReviewItem>
      <ListReviewComponent className="title">
        <h4>{title}</h4>
      </ListReviewComponent>
      <ListReviewComponent className="info">
        <h5>{writer}</h5>
        <h5>{registerdDate}</h5>
      </ListReviewComponent>
      <ListReviewComponent className="desc">
        <h5>{body}</h5>
      </ListReviewComponent>
    </ListReviewItem>
  );
};

const ListReviewMap = ({
  reviewlist,
  page,
  vendorid,
  vendor,
  location,
  owner,
}) => {
  const dispatch = useDispatch();
  const [formUp, setFormUp] = useState(false);

  const onToggleClick = () => {
    setFormUp(!formUp);
  };

  useEffect(() => {
    vendorid && dispatch(reviewList({ vendorid, page }));
  }, [dispatch, vendorid, page, location]);

  useEffect(() => {}, [reviewlist]);
  
  return (
    <ListReviewMapBlock>
      {!formUp && !owner && (
        <ListReviewMapItem>
          <ListReviewToggle onClick={onToggleClick}>리뷰 작성</ListReviewToggle>
        </ListReviewMapItem>
      )}
      {formUp && !owner && (
        <MakeReviewPage
          vendorid={vendorid}
          vendor={vendor}
          onToggleClick={onToggleClick}
        />
      )}
      {reviewlist &&
        reviewlist.content.map((review) => (
          <ReviewItem review={review} key={review.id} />
        ))}
    </ListReviewMapBlock>
  );
};

export default withRouter(ListReviewMap);
