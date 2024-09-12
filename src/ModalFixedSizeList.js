import React from 'react';
import Modal from 'react-modal';
import { FixedSizeList } from './FixedSizeList';

// Ensure that the modal is attached to the app element
Modal.setAppElement('#root');

const ModalFixedSizeList = ({
  isOpen,
  onRequestClose,
  modalStyle,
  modalContentStyle,
  ...listProps
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...modalStyle,
        },
        content: {
          position: 'relative',
          inset: 'auto',
          ...modalContentStyle,
        },
      }}
    >
      <FixedSizeList {...listProps} />
    </Modal>
  );
};

export default ModalFixedSizeList;

