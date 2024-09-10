import React from 'react';
import Modal from 'react-modal';
import { FixedSizeList } from './FixedSizeList';

Modal.setAppElement('#root'); // Set the app element for accessibility

const ModalFixedSizeList = ({
  isOpen,
  onRequestClose,
  modalStyle,
  modalClassName,
  ...listProps
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyle}
      className={modalClassName}
    >
      <FixedSizeList {...listProps} />
    </Modal>
  );
};

export default ModalFixedSizeList;

