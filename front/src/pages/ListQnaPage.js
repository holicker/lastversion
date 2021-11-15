import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "../components/common/BasicButton";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import ListQnaMapContainer from "../containers/map/qna/ListQnaMapContainer";
const ListQnaPageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const ListQnaPageItem = styled(BasicItem)`
  flex: 1;

  &.viewContent {
    align-self: center;
    flex: 1;
    width: 80%;
    background-color: ${OpenColor.white};
  }
  &.viewButton {
    flex: 0 0 2rem;
  }
`;

const ListQnaPage = ({match}) => {
  return (
    <ListQnaPageBlock>
        
      <BasicButton to={match.url + "/write"}>질문 작성</BasicButton>
      <ListQnaMapContainer />
    </ListQnaPageBlock>
  );
};

export default ListQnaPage;
