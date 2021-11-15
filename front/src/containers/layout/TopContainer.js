import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Top from "../../components/layout/Top";
import { initializeAuth } from "../../modules/auth";
import { logout } from "../../modules/user";
import { initializeVendor } from "../../modules/vendor";

const TopContainer = () => {
  const { nickname } = useSelector(({ user }) => ({
    nickname: user.nickname,
  }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    dispatch(initializeAuth());
    dispatch(initializeVendor());
  };

  return <Top nickname={nickname} onLogout={onLogout} />;
};

export default TopContainer;
