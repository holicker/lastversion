import OpenColor from "open-color";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import styled from "styled-components";
import { qnaList } from "../../../modules/qnalist";
import MakeQnaPage from "../../../pages/MakeQnaPage";
import BasicButton from "../../common/BasicButton";
import { BasicDiv } from "../../common/BasicDiv";
import { BasicItem } from "../../common/BasicItem";

const ListQnaMapBlock = styled(BasicDiv)`
  margin: 0px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ListQnaMapItem = styled.div`
  width: 30rem;
  margin: 1rem 1rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListQnaItem = styled.div`
  margin: 0.5rem 0;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 60%;
  border: 1px solid ${OpenColor.gray[4]};
  border-radius: 10px;
  text-align: center;
`;

const ListQnaToggle = styled.div`
  margin: 20px;
  width: 50%;
  height: 100%;
  border: 1px dashed ${OpenColor.gray[4]};
  border-radius: 20px;
  color: ${OpenColor.gray[5]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ListQnaComponent = styled(BasicItem)`
  color: ${OpenColor.gray[7]};
  &.title {
    display: flex;
    justify-content: center;
  }
  &.info {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${OpenColor.gray[4]};
    padding: 0 0 3px 0;
  }
  &.desc {
    display: flex;
    justify-content: space-between;
  }

  h4 {
    text-align: left;
    display: inline-block;
    margin: 0;
    padding: 0;
  }
  h5 {
    text-align: left;
    display: inline-block;
    margin: 0;
    padding: 0;
    margin-top: 5px;
  }
`;

const QnaItem = ({ qna }) => {
  const { title, body, writer, registerdDate } = qna;
  return (
    <ListQnaItem>
      <ListQnaComponent className="title">
        <h4>{title}</h4>
      </ListQnaComponent>
      <ListQnaComponent className="info">
        <h5>{writer}</h5>
        <h5>{registerdDate}</h5>
      </ListQnaComponent>
      <ListQnaComponent className="desc">
        <h5>{body}</h5>
      </ListQnaComponent>
    </ListQnaItem>
  );
};

const ListQnaMap = ({ qnalist, page, vendorid, vendor, location, owner }) => {
  const dispatch = useDispatch();
  const [formUp, setFormUp] = useState(false);

  const onToggleClick = () => {
    setFormUp(!formUp);
  };

  useEffect(() => {
    vendorid && dispatch(qnaList({ vendorid, page }));
  }, [dispatch, vendorid, page, location]);

  useEffect(() => {}, [qnalist]);

  return (
    <ListQnaMapBlock>
      {!formUp && !owner && (
        <ListQnaMapItem>
          <ListQnaToggle onClick={onToggleClick}>리뷰 작성</ListQnaToggle>
        </ListQnaMapItem>
      )}
      {formUp && !owner && (
        <MakeQnaPage
          vendorid={vendorid}
          vendor={vendor}
          onToggleClick={onToggleClick}
        />
      )}

      {qnalist &&
        qnalist.content.map((qna) => <QnaItem qna={qna} key={qna.id} />)}
    </ListQnaMapBlock>
  );
};

export default withRouter(ListQnaMap);
