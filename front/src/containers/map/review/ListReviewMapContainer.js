import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { withRouter } from "react-router";
import { reviewList as list } from "../../../modules/reviewlist";
import ListReviewMap from "../../../components/map/review/ListReviewMap";

const ListReviewMapContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { vendorid, reviewlist } = useSelector(({ reviewlist, vendor }) => ({
    vendorid: vendor.visit ? vendor.visit.id : null,
    reviewlist: reviewlist.reviewlist,
  }));

  useEffect(() => {
    let { page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    page = page - 1;
    dispatch(list({ vendorid, page }));
  }, [dispatch, vendorid]);
  return <ListReviewMap reviewlist={reviewlist} />;
};

export default withRouter(ListReviewMapContainer);
