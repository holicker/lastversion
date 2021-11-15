import OpenColor from "open-color";
import { Route, Switch } from "react-router";
import styled from "styled-components";
import "./App.css";
import PrivateRoute from "./components/auth/PrivateRoute";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import NavbarContainer from "./containers/layout/NavbarContainer";
import TopContainer from "./containers/layout/TopContainer";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import ManagePage from "./pages/ManagePage";
import MapPage from "./pages/MapPage";
import MerchandisePage from "./pages/MerchandisePage";
import NoticePage from "./pages/NoticePage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";
import TestPage from "./pages/ChatPage";
import MakeVendorPage from "./pages/MakeVendorPage";
import TransactionPage from "./pages/TransactionPage";

const EntireSettingBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <div>
      <EntireSettingBlock>
        <TopContainer />
        <Header />
        <NavbarContainer />
        <Content>
          <Switch>
            <Route component={MapPage} path={"/"} exact />
            <PrivateRoute component={NoticePage} path={"/notice"} />
            <Route component={MapPage} path={["/map/:domain", "/map"]} />
            <Route component={SearchPage} path={"/search"} />
            <Route component={ManagePage} path={"/manage"} />
            <Route component={MerchandisePage} path={"/merchandise"} />
            <Route component={TransactionPage} path={"/transaction"} />
            <Route component={RegisterPage} path={"/register"} exact />
            <Route component={LoginPage} path={"/login"} exact />
            <Route component={MakeVendorPage} path={"/vendor"} />
            <Route component={ChatPage} path={"/chat/:roomid"} />
          </Switch>
        </Content>
        <Footer />
      </EntireSettingBlock>
    </div>
  );
}

export default App;
