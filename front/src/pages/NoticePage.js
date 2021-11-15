import OpenColor from "open-color";
import React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import Responsive from "../components/common/Responsive";
import ListNoticePage from "./ListNoticePage";
import ViewNoticePage from "./ViewNoticePage";
import WriteNoticePage from "./WriteNoticePage";

const NoticePageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const NoticePageWrapper = styled(Responsive)`
  display: flex;
  background-color: white;
  width: 70%;
  height: 100%;
  flex-direction: column;
`;

const NoticePageItem = styled(BasicItem)`
  &.center {
    flex: 0 0 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  &.title {
    font-size: 2rem;
    margin: 10px 0 10px 0;
  }
  &.content {
    flex: 1;
  }
`;

const NoticeItemBlock = styled(BasicItem)``;

const NoticePage = ({ match }) => {
  return (
    <NoticePageBlock>
      <NoticePageWrapper>
        <NoticePageItem className="center">
          <NoticePageItem className="title">공지사항</NoticePageItem>
        </NoticePageItem>
        <NoticePageItem className="content">
          <Route component={ListNoticePage} path={match.path} exact />
          <Route
            component={ViewNoticePage}
            path={match.path + "/view/:noticeid"}
          />
          <Route component={WriteNoticePage} path={match.path + "/write"} />
        </NoticePageItem>
      </NoticePageWrapper>
    </NoticePageBlock>
  );
};

export default NoticePage;
