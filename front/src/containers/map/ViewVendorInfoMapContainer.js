import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import ViewVendorInfoMap from "../../components/map/ViewVendorInfoMap";
import { getByVendordomain } from "../../modules/vendor";

const VeiwVendorInfoMapContainer = ({ match }) => {
  const { vendor } = useSelector(({ vendor }) => ({
    vendor: vendor.visit,
  }));

  const { vendorid: domain } = match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`domain : ${domain}`);
    dispatch(getByVendordomain(domain));
  }, [dispatch, domain]);

  return <ViewVendorInfoMap vendor={vendor} match={match} />;
};

export default withRouter(VeiwVendorInfoMapContainer);
