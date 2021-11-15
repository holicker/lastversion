import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MakeReviewMap from "../../../components/map/review/MakeReviewMap";
import { changeField, initialize } from "../../../modules/write";

const MakeReviewMapContainer = () => {
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));

  const dispatch = useDispatch();
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <MakeReviewMap onChangeField={onChangeField} title={title} body={body} />
  );
};

export default MakeReviewMapContainer;
