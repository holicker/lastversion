import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import NoticeActionButton from "../../components/common/NoticeActionButton";
import ViewNotice from "../../components/notice/ViewNotice";
import { deleteNotice } from "../../lib/api/notice";
import { readNotice, unloadNotice } from "../../modules/notice";
import { setOriginalNotice } from "../../modules/write";

const ViewNoticeContainer = ({ match, history }) => {
  const { noticeid: id } = match.params;
  const dispatch = useDispatch();
  const { notice, error, loading } = useSelector(
    ({ notice, loading, user }) => ({
      notice: notice.notice,
      error: notice.error,
      loading: loading["notice/READ_NOTICE"],
      user: user.user,
    })
  );

  useEffect(() => {
    dispatch(readNotice(id));
    return () => {
      // 이게 언마운트 될 때이구만
      dispatch(unloadNotice());
    };
  }, [dispatch, id]);

  const onEdit = () => {
    dispatch(setOriginalNotice(notice));
    history.push("/write");
  };

  const onRemove = async () => {
    try {
      await deleteNotice(id);
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };


  //const ownnotice = (user && user.user) === (notice && notice.writer); 자신의 소유인지 확인

  return (
    <ViewNotice
      notice={notice}
      loading={loading}
      error={error}
      actionButtons={<NoticeActionButton onEdit={onEdit} onRemove={onRemove} />}
    />
  );
};

export default withRouter(ViewNoticeContainer);
