import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { withRouter } from "react-router";
import ListQnaMap from "../../../components/map/qna/ListQnaMap";
import { qnaList as list } from "../../../modules/qnalist";

const ListQnaMapContainer = ({ location, match, history }) => {
  const dispatch = useDispatch();
  const { qnalist, error, loading } = useSelector(({ qnalist, loading }) => ({
    qnalist: qnalist.qnalist,
    error: qnalist.error,
    loading: loading["qnalist/LIST_QNA"],
  }));

  const onClickLink = (id) => {
    history.push(match.url + `/${id}`);
  };

  useEffect(() => {
    const { username } = match.params;
    let { page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    page = page - 1;
    dispatch(list({ username, page }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, location.search]);
  return (
    <ListQnaMap
      loading={loading}
      error={error}
      qnalist={qnalist}
      onClickLink={onClickLink}
    />
  );
};

export default withRouter(ListQnaMapContainer);
