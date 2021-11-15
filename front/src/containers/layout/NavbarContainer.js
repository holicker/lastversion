import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/layout/Navbar";
import { changeKeyword } from "../../modules/search";
import { getByUserid, getByVendorid } from "../../modules/vendor";
import { withRouter } from "react-router";
import AskMakeModal from "../../components/vendor/AskMakeModal";
import { initializeVendor } from "../../modules/vendor";

const NavbarContainer = ({ history, location }) => {
  const { keyword, userid, vendorid, vendordomain, vendorError } = useSelector(
    ({ search, user, vendor }) => ({
      keyword: search.keyword,
      userid: user.id,
      vendorid: vendor.vendorid,
      vendordomain: vendor.vendordomain,
      vendorError: vendor.vendorError,
    })
  );

  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const onChangeKeyword = (e) => {
    const { value } = e.target;
    console.log(`value : ${value}`);
    dispatch(
      changeKeyword({
        keyword: value,
      })
    );
  };

  const onFindMyVendor = () => {
    if (vendorid === -1) {
      console.log("벤더가 현재 비어있습니다!");
      setModal(true);
    } else {
      history.push(`/map/${vendordomain}`);
    }
  };

  const onConfirm = () => {
    setModal(false);
    history.push(`/vendor`);
  };
  const onCancel = () => {
    setModal(false);
  };

  return (
    <>
      <Navbar
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
        onFindMyVendor={onFindMyVendor}
      />
      <AskMakeModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
    </>
  );
};

export default withRouter(NavbarContainer);
