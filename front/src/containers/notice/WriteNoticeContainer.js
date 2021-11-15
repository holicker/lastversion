import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WriteNotice from "../../components/notice/WriteNotice";
import { changeField, initialize } from "../../modules/write";

const WriteNoticeContainer = () => {
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
    <WriteNotice onChangeField={onChangeField} title={title} body={body} />
  );
};

export default WriteNoticeContainer;
