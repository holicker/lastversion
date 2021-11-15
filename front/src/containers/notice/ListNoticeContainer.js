import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { withRouter } from "react-router";
import ListNotice from "../../components/notice/ListNotice";
import { noticeList as list } from "../../modules/noticelist";

const ListNoticeContainer = ({ history, location, match }) => {
  const dispatch = useDispatch();
  const { noticelist, error, loading } = useSelector(({ noticelist, loading }) => ({
    noticelist: noticelist.noticelist,
    error: noticelist.error,
    loading: loading["noticelist/LIST_NOTICE"],
  }));

  const onClickLink = (id) => {
    history.push(`/notice/view/${id}`);
  }

  useEffect(() => {
    const { username } = match.params;
    let { page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    page = page - 1;
    dispatch(list({ username, page }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, location.search]);
  return <ListNotice loading={loading} error={error} noticelist={noticelist} onClickLink={onClickLink} />;
};

export default withRouter(ListNoticeContainer);
