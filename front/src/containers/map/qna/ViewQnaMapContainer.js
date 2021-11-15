import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import QnaActionButtons from "../../../components/common/QnaActionButton";
import ViewQnaMap from "../../../components/map/qna/ViewQnaMap";
import { deleteQna } from "../../../lib/api/qna";
import { readQna, unloadQna } from "../../../modules/qna";
import { setOriginalQna } from "../../../modules/write";

const VeiwQnaMapContainer = ({ match, history }) => {
  console.log(`View Qna Match : ${JSON.stringify(match)}`);
  console.log(`View Qna Match : ${JSON.stringify(match.params)}`);
  const { qnaid : id } = match.params;
  console.log(`View Qna id : ${id}`)
  const dispatch = useDispatch();
  const { qna, error, loading } = useSelector(({ qna, loading, user }) => ({
    qna: qna.qna,
    error: qna.error,
    loading: loading["qna/READ_QNA"],
    user: user.user,
  }));

  useEffect(() => {
    dispatch(readQna(id));
    return () => {
      // 이게 언마운트 될 때이구만
      dispatch(unloadQna());
    };
  }, [dispatch, id]);

  const onEdit = () => {
    dispatch(setOriginalQna(qna));
    history.push("/write");
  };

  const onRemove = async () => {
    try {
      await deleteQna(id);
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  //const ownQna = (user && user.user) === (qna && qna.writer); 자신의 소유인지 확인

  return (
    <ViewQnaMap
      qna={qna}
      loading={loading}
      error={error}
      actionButtons={<QnaActionButtons onEdit={onEdit} onRemove={onRemove} />}
    />
  );
};

export default withRouter(VeiwQnaMapContainer);
