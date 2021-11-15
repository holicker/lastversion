import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import WriteActionButton from "../../components/common/WriteActionButton";
import { writeNotice } from "../../modules/write";

const WriteNoticeActionButtonContainer = ({ history, location }) => {
  const dispatch = useDispatch();
  const { title, body, notice, noticeError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    notice: write.notice,
    noticeError: write.noticeError,
  }));

  const onPublish = () => {
    dispatch(writeNotice({ title, body }));
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (notice) {
      const { id } = notice;
      history.push(`/notice/view/${id}`);
    }
    if (noticeError) {
      console.log(noticeError);
    }
  }, [history, notice, noticeError]);

  return <WriteActionButton type="notice" onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(WriteNoticeActionButtonContainer);
