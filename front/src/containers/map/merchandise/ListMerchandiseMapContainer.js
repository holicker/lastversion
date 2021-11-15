import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import ListMerchandiseMap from "../../../components/map/merchandise/ListMerchandiseMap";
import {
  readMerchandise,
  unloadMerchandise
} from "../../../modules/merchandise";

const ListMerchandiseMapContainer = ({owner}) => {
  const dispatch = useDispatch();
  const { merchandiselist, merchandise } = useSelector(
    ({ vendor, merchandise }) => ({
      merchandiselist: vendor.visit ? vendor.visit.merchandises : null,
      merchandise: merchandise,
    })
  );
  const [modal, setModal] = useState(false);
  const onClickLink = (id) => {
    dispatch(readMerchandise(id));
    console.log(`id : ${id}`);
    setModal(true);
  };
  const onClickClose = () => {
    setModal(false);
    dispatch(unloadMerchandise());
  };

  useEffect(() => {}, [merchandise]);

  return (
    <ListMerchandiseMap
      merchandiselist={merchandiselist}
      merchandise={merchandise}
      onClickLink={onClickLink}
      onClickClose={onClickClose}
      modal={modal}
      owner={owner}
    />
  );
};

export default withRouter(ListMerchandiseMapContainer);
