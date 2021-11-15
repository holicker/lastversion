import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import WriteActionButton from "../../../components/common/WriteActionButton";
import { qnaList } from "../../../modules/qnalist";
import { initialize, writeQna } from "../../../modules/write";

const MakeQnaActionButtonContainer = ({
  vendorid,
  history,
  location,
  match,
  onToggleClick,
}) => {
  const dispatch = useDispatch();
  const { title, body, writer, qna, qnaError, vendordomain } = useSelector(
    ({ write, vendor, user }) => ({
      title: write.title,
      writer: user.nickname,
      body: write.body,
      qna: write.qna,
      qnaError: write.qnaError,
      vendordomain: vendor.visit ? vendor.visit.vendorDomain : null,
    })
  );

  const onPublish = () => {
    dispatch(writeQna({ vendorid, title, body, writer }));
    dispatch(initialize());
    onToggleClick();
    dispatch(qnaList({ vendorid }));
  };

  const onCancel = () => {
    onToggleClick();
  };

  useEffect(() => {
    if (qna) {
    }
    if (qnaError) {
      console.log(qnaError);
    }
    return dispatch(initialize());
  }, [qna, qnaError, vendordomain]);

  return (
    <WriteActionButton type="qna" onPublish={onPublish} onCancel={onCancel} />
  );
};

export default withRouter(MakeQnaActionButtonContainer);
