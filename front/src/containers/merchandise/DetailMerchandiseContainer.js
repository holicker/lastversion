import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import DetailMerchandise from "../../../components/map/merchandise/DetailMerchandise";
import { setOriginalMerchandise } from "../../../modules/write";
import MerchandiseActionButton from "../../../components/common/MerchandiseActionButton";
import { deleteMerchandise } from "../../../lib/api/merchandise";
import {
  readMerchandise,
  unloadMerchandise,
} from "../../../modules/merchandise";

const DetailMerchandiseContainer = ({ match, history }) => {
  console.log(`Detail merchandise Match : ${JSON.stringify(match)}`);
  console.log(`Detail merchandise Match : ${JSON.stringify(match.params)}`);
  const { merchandiseid: id } = match.params;
  console.log(`Detail merchandise id : ${id}`);
  const dispatch = useDispatch();
  const { merchandise, error, loading } = useSelector(
    ({ merchandise, loading, user }) => ({
      merchandise: merchandise.merchandise,
      error: merchandise.error,
      loading: loading["merchandise/READ_merchandise"],
      user: user.user,
    })
  );

  useEffect(() => {
    dispatch(readMerchandise(id));
    return () => {
      // 이게 언마운트 될 때이구만
      dispatch(unloadMerchandise());
    };
  }, [dispatch, id]);

  const onEdit = () => {
    dispatch(setOriginalMerchandise(merchandise));
    history.push("/write");
  };

  const onRemove = async () => {
    try {
      await deleteMerchandise(id);
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  //const ownmerchandise = (user && user.user) === (merchandise && merchandise.writer); 자신의 소유인지 확인

  return (
    <DetailMerchandise
      merchandise={merchandise}
      loading={loading}
      error={error}
      actionButtons={
        <MerchandiseActionButton onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default withRouter(DetailMerchandiseContainer);
