import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./modules";
import { check } from "./lib/api/auth";
import { tempSetUser } from "./modules/user";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import { tempSetVendor } from "./modules/vendor";

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
	}
`;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function loadUser() {
  try {
    console.log("loadUser() start");
    const user = localStorage.getItem("user");
    const id = localStorage.getItem("id");
    const access_token = localStorage.getItem("access_token");
    const vendorid = localStorage.getItem("vendorid");
    const vendordomain = localStorage.getItem("vendordomain");
    const nickname = localStorage.getItem("nickname");

    if (!user) return;

    store.dispatch(
      tempSetUser({
        id: JSON.parse(id),
        user: JSON.parse(user),
        nickname: JSON.parse(nickname),
      })
    ); // json parse는 키 = 객체 를 키 : 객체로 변환해줌
    store.dispatch(
      tempSetVendor({
        vendorid: JSON.parse(vendorid),
        vendordomain: JSON.parse(vendordomain),
      })
    );
    store.dispatch(check({ access_token }));
  } catch (e) {
    console.log("LocalStorage(index) is not working : loadUser()");
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
