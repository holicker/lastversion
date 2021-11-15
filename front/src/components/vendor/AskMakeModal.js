import React from 'react';
import AskModal from '../common/AskModal';

const AskMakeModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      title="상점이 없어요!"
      description="현재 개설된 상점이 없습니다. 개설 페이지로 이동하시겠습니까?"
      confirmText="이동"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default AskMakeModal;
