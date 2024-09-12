import React from 'react';
import Modal from 'react-modal';
import { FixedSizeList } from './FixedSizeList';

// Ensure that the modal is attached to the app element
Modal.setAppElement('#root');

const ModalFixedSizeList = ({ isOpen, onRequestClose, ...listProps }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Fixed Size List Modal"
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

