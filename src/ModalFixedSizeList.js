import React from 'react';
import Modal from 'react-modal';
import { FixedSizeList } from './';

const ModalFixedSizeList = ({
  isOpen,
  onRequestClose,
  contentLabel,
  style,
  ...listProps
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={style}
    >
      <FixedSizeList {...listProps} />
    </Modal>
  );
};

export default ModalFixedSizeList;

