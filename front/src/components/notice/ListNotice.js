import OpenColor from "open-color";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BasicButton from "../common/BasicButton";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import { LinkButton } from "../common/LinkButton";

const ListNoticeBlock = styled(BasicDiv)`
  margin: 0px 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ListNoticeItem = styled(BasicItem)`
  color: ${OpenColor.gray[7]};

  &.addbutton {
    margin-top: 5px;
    margin-right: 30px;
    justify-content: right;
  }

  a {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
  }

  &.items {
    border: 1px solid ${OpenColor.gray[5]};
    margin: 1rem 4rem;
    cursor: pointer;
    border-radius: 10px;
  }

`;

const NoticeItem = ({ notice, onClickLink }) => {
  const { id, title, body, registeredDate } = notice;
  console.log(`onclick : ${onClickLink}`);
  return (
    <ListNoticeItem className="items" onClick={() => onClickLink(id)}>
      <p>{title}</p>
    </ListNoticeItem>
  );
};

const ListNotice = ({ noticelist, loading, error, onClickLink }) => {
  if (error) {
    return <ListNoticeBlock>에러가 발생했습니다.</ListNoticeBlock>;
  }
  return (
    <ListNoticeBlock>
      <ListNoticeItem className="addbutton">
        <BasicButton to="/notice/write">공지 등록</BasicButton>
      </ListNoticeItem>
      {!loading && noticelist && (
        <div>
          {noticelist.content.map((notice) => (
            <NoticeItem
              notice={notice}
              key={notice.id}
              onClickLink={onClickLink}
            />
          ))}
        </div>
      )}
    </ListNoticeBlock>
  );
};

export default ListNotice;
