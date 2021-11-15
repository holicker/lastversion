import React, { useState } from 'react';
import OpenColor from 'open-color';
import styled from 'styled-components';
import AskRemoveModal from '../map/qna/AskRemoveModal';

const MerchandiseActionButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${OpenColor.gray[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background: ${OpenColor.gray[1]};
    color: ${OpenColor.cyan[7]};
  }
  & + & {
    margin-left: 0.25rem;
  }
`;

const MerchandiseActionButton = ({ onEdit, onRemove }) => {
  const [modal, setModal] = useState(false);
  const onRemoveClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    onRemove();
  };
  return (
    <MerchandiseActionButtonBlock>
      <ActionButton onClick={onEdit}>수정</ActionButton>
      <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
      <AskRemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </MerchandiseActionButtonBlock>
  );
};

export default MerchandiseActionButton;