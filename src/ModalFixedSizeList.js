import React from 'react';
import Modal from 'react-modal';
import { FixedSizeList } from 'react-window';

// Ensure that the app element is set for accessibility
Modal.setAppElement('#root');

const ModalFixedSizeList = ({ isOpen, onRequestClose, listProps }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <FixedSizeList {...listProps} />
    </Modal>
  );
};

export default ModalFixedSizeList;

