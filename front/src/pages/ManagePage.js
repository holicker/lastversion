import OpenColor from "open-color";
import React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import BasicButton from "../components/common/BasicButton";
import { BasicDiv } from "../components/common/BasicDiv";
import Responsive from "../components/common/Responsive";
import ListQnaManage from "../components/manage/ListQnaManage";
import ListReviewManage from "../components/manage/ListReviewManage";
import ViewQnaManage from "../components/manage/ViewQnaManage";
import { BasicItem } from "../components/common/BasicItem";
import NaverMapAPI from "../lib/map/NaverMapAPI";

const ManagePageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  height: 100%;
`;

const ManagePageWrapper = styled(Responsive)`
  display: flex;
  background-color: white;
  width: 80%;
`;

const ManagePageItem = styled(BasicItem)`
  width: 100%;
  border: 1px solid ${OpenColor.black};
  flex: 1;

  &.left {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  &.right {
    flex: 1.5;
    display: flex;
    flex-direction: column;
  }

  &.menu {
    flex: 0 0 2rem;
  }

  &.content {
    flex: 1;
  }
`;

const ManagePage = ({ match, history }) => {
  console.log({ match });
  return (
    <ManagePageBlock>
      <ManagePageWrapper>
        <ManagePageItem className="left">
          <ManagePageItem className="info">
            가게 정보에 대한 거 쓰기 뭐를 관리하나? 일단 가게를 열었는지
            확인하고, 가게를 열었으면 가게의 기본 정보 설정, 리뷰와 답글 달기
            등등.. 리뷰 달기와 답글 달기를 관리 페이지에서 설정하는 게 좋을 듯.
            가게를 노출 할지 말지도 결정해야 하고.
          </ManagePageItem>
          <ManagePageItem className="map">
            <NaverMapAPI match={match} history={history} />
          </ManagePageItem>
        </ManagePageItem>
        <ManagePageItem className="right">
          <ManagePageItem className="menu">
            <BasicButton to={match.url + "/review"}>review</BasicButton>
            <BasicButton to={match.url + "/qna"}>qna</BasicButton>
          </ManagePageItem>
          <ManagePageItem className="content">
            <Route component={ListQnaManage} path={match.path + "/qna"} exact />
            <Route
              component={ViewQnaManage}
              path={match.path + "/qna/:qnaid"}
            />
            <Route
              component={ListReviewManage}
              path={[match.path + "/review", match.path]}
              exact
            />
          </ManagePageItem>
        </ManagePageItem>
      </ManagePageWrapper>
    </ManagePageBlock>
  );
};

export default ManagePage;
