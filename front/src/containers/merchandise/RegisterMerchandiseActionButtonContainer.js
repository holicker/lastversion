import React from "react";
import { withRouter } from "react-router";
import WriteActionButton from "../../components/common/WriteActionButton";

const RegisterMerchandiseActionButtonContainer = ({ history, location }) => {

  return <WriteActionButton />;
};

export default withRouter(RegisterMerchandiseActionButtonContainer);
