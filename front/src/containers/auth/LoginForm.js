import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, login } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";
import { check } from "../../modules/user";
import { getByUserid } from "../../modules/vendor";

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user, id, vendorid, vendordomain, nickname } =
    useSelector(({ auth, user, vendor }) => ({
      form: auth.login,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user,
      id: user.id,
      nickname: user.nickname,
      vendorid: vendor.vendorid,
      vendordomain: vendor.vendordomain,
    }));
  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    const grant_type = "password";
    dispatch(login({ username, password, grant_type }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log("오류 발생");
      console.log(authError);
      setError("로그인 실패");
      return;
    }
    if (auth) {
      console.log("로그인 성공");
      console.log(auth);
      const { access_token } = auth;
      localStorage.setItem("access_token", access_token);
      dispatch(check({ access_token }));
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(getByUserid(id));
      try {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("id", JSON.stringify(id));
        localStorage.setItem("nickname", JSON.stringify(nickname));
      } catch (e) {
        console.log("LocalStorage is not working");
      }
    }
  }, [history, user]);

  useEffect(() => {
    if (vendorid) {
      history.push("/main");
      try {
        localStorage.setItem("vendorid", JSON.stringify(vendorid));
        localStorage.setItem("vendordomain", JSON.stringify(vendordomain));
      } catch (e) {
        console.log("LocalStorage is not working");
      }
    }
  }, [history, vendorid]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginForm);
