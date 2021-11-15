import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import WriteActionButton from "../../../components/common/WriteActionButton";
import { reviewList } from "../../../modules/reviewlist";
import { initialize, writeReview } from "../../../modules/write";

const MakeReviewActionButtonContainer = ({
  vendorid,
  history,
  vendor,
  onToggleClick,
}) => {
  const dispatch = useDispatch();
  const { title, body, writer, review, reviewError, vendordomain } =
    useSelector(({ write, vendor, user }) => ({
      title: write.title,
      writer: user.nickname,
      body: write.body,
      review: write.review,
      reviewError: write.reviewError,
      vendordomain: vendor.visit ? vendor.visit.vendorDomain : null,
    }));
  const onPublish = () => {
    dispatch(writeReview({ vendorid, title, body, writer }));
    dispatch(initialize());
    onToggleClick();
    dispatch(reviewList({ vendorid }));
  };

  const onCancel = () => {
    dispatch(initialize());
    onToggleClick();
  };

  useEffect(() => {
    if (review) {
    }
    if (reviewError) {
      console.log(reviewError);
    }
    return dispatch(initialize());
  }, [review, reviewError, vendordomain]);

  return (
    <WriteActionButton
      type="review"
      onPublish={onPublish}
      onCancel={onCancel}
    />
  );
};

export default withRouter(MakeReviewActionButtonContainer);
