import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "../common/BasicButton";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";

const ViewNoticeBlock = styled(BasicDiv)`
  margin: 0px 0px;
  display: flex;
  justify-content: center;
  width: 80%;
  flex-direction: column;
  color: ${OpenColor.gray[7]};
`;

const ViewNoticeItem = styled(BasicItem)`
  color: ${OpenColor.gray[7]};
  flex: 1;

  &.noticeTitle {
    padding: 0;
    margin-top: 1.5rem;
    flex: 0 0 1.5rem;
    border-bottom: 1px solid ${OpenColor.gray[4]};

    h3 {
      padding: 0;
      margin: 0;
    }
  }
  &.noticeInfo {
    flex: 0 0 1rem;
  }
  &.noticeContent {
    border: 1px solid ${OpenColor.gray[4]};
    border-radius: 10px;
    flex: 1;
    h5 {
      padding: 2rem;
      text-align: left;
      margin: 0;
      width: 100%;
    }
  }
  &.noticeButton {
    margin-top: 6px;
    flex: 0 0 2rem;
  }

  Button + Button {
    margin: 1px;
  }
`;

const ViewNotice = ({ notice, error, loading, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <ViewNoticeBlock>존재하지 않는 포스트입니다.</ViewNoticeBlock>;
    }
    return <ViewNoticeBlock>오류 발생!</ViewNoticeBlock>;
  }

  if (loading || !notice) {
    return null;
  }

  const { title, body, writer, registeredDate } = notice;
  return (
    <ViewNoticeBlock>
      <ViewNoticeItem className="noticeTitle">
        <h3>{title}</h3>
      </ViewNoticeItem>
      <ViewNoticeItem className="noticeInfo"></ViewNoticeItem>
      <ViewNoticeItem className="noticeContent">
        <h5 dangerouslySetInnerHTML={{ __html: body }}></h5>
      </ViewNoticeItem>
      <ViewNoticeItem className="noticeButton">
        <BasicButton to="/notice">뒤로 가기</BasicButton>

        {/* <BasicButton to="/notice">수정</BasicButton>

        <BasicButton to="/notice">삭제</BasicButton>

        <BasicButton to="/notice">비활성화/활성화 토글</BasicButton> */}
      </ViewNoticeItem>
    </ViewNoticeBlock>
  );
};

export default ViewNotice;
