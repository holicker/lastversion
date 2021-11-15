import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";
const ListQnaManageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// const ListQnaManageItem = styled.div`
//   margin: 1rem 1rem;
//   flex-direction: column;
//   display: flex;
// `;

const QnaTable = styled.table``;
const QnaTh = styled.th``;
const QnaTr = styled.tr``;
const QnaTd = styled.td``;

const QnaHead = () => {
  return (
    <QnaTr>
      <QnaTh className="no">번호</QnaTh>
      <QnaTh className="title">질문 제목</QnaTh>
      <QnaTh className="info">날짜</QnaTh>
      <QnaTh className="desc">조회수</QnaTh>
      <QnaTh className="desc">답변 여부</QnaTh>
    </QnaTr>
  );
};
const QnaItem = ({ onClick }) => {
  return (
    <QnaTr onClick={onClick}>
      <QnaTd className="no">번호</QnaTd>
      <QnaTd className="title">질문 제목</QnaTd>
      <QnaTd className="info">날짜 등 정보</QnaTd>
      <QnaTd className="desc">내용</QnaTd>
      <QnaTd className="desc">내용</QnaTd>
    </QnaTr>
  );
};

const ListQnaManage = ({ match, history }) => {
  const ClickMove = (qnaid) => {
    console.log(qnaid);
    alert(`${qnaid}로 이동합니다.`);
    history.push(match.url + `/${qnaid}`)
  };

  return (
    <ListQnaManageBlock>
      <QnaTable>
        <QnaHead />
        <QnaItem onClick={() => ClickMove("1")} />
        <QnaItem onClick={() => ClickMove("2")} />
        <QnaItem onClick={() => ClickMove("3")} />
        <QnaItem onClick={() => ClickMove("4")} />
        <QnaItem onClick={() => ClickMove("5")} />
        <QnaItem onClick={() => ClickMove("6")} />
        <QnaItem onClick={() => ClickMove("7")} />
        <QnaItem onClick={() => ClickMove("8")} />
        <QnaItem onClick={() => ClickMove("9")} />
        <QnaItem onClick={() => ClickMove("10")} />
      </QnaTable>
    </ListQnaManageBlock>
  );
};

export default ListQnaManage;
