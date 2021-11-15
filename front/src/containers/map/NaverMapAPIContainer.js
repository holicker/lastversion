import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import NaverMapAPI from "../../lib/map/NaverMapAPI";
import {
  changeVendorField,
  getByVendordomain,
  listVendor,
} from "../../modules/vendor";

const NaverMapAPIContainer = ({ match, history }) => {
  const dispatch = useDispatch();
  const { vendorlng, vendorlat, vendorlist } = useSelector(({ vendor }) => ({
    vendorlng: vendor.vendorlng,
    vendorlat: vendor.vendorlat,
    vendorlist: vendor.vendorlist,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeVendorField(payload)),
    [dispatch]
  );

  const onMarkerClick = useCallback(
    (vendordomain) => {
      dispatch(getByVendordomain(vendordomain));
    },
    [dispatch]
  );
  

  useEffect(() => {
    dispatch(listVendor());
  }, [dispatch]);

  // { key: "vendorlng", value: e.coord.lng() }
  return (
    <NaverMapAPI
      vendorlist={vendorlist}
      onChangeField={onChangeField}
      onMarkerClick={onMarkerClick}
      noClickMap={false}
    />
  );
};

export default withRouter(NaverMapAPIContainer);
