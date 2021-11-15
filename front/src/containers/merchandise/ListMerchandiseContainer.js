import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import ListMerchandise from "../../components/merchandise/ListMerchandise";
import merchandise, {
  readMerchandise,
  unloadMerchandise,
} from "../../modules/merchandise";
import { merchandiseList } from "../../modules/merchandiselist";
const ListMerchandiseContainer = ({ history, match, writeToggle }) => {
  const { vendorid, list, merchandise } = useSelector(
    ({ vendor, merchandise, merchandiselist }) => ({
      vendorid: vendor.vendorid,
      list: merchandiselist.merchandiselist,
      merchandise: merchandise,
    })
  );

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(merchandiseList({ vendorid }));
  }, [dispatch, vendorid]);

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
    <ListMerchandise
      list={list}
      merchandise={merchandise}
      onClickClose={onClickClose}
      modal={modal}
      owner={true}
      onClickLink={onClickLink}
      writeToggle={writeToggle}
    />
  );
};

export default withRouter(ListMerchandiseContainer);
