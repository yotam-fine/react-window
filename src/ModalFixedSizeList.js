import React from 'react';
import Modal from 'react-modal';
import { FixedSizeList } from './FixedSizeList';

Modal.setAppElement('#root'); // Set the app element for accessibility

const ModalFixedSizeList = ({ isOpen, onClose, ...listProps }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="List Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxHeight: '80%',
          overflow: 'auto',
        },
      }}
    >
      <button onClick={onClose} style={{ float: 'right' }}>Close</button>
      <FixedSizeList {...listProps} />
    </Modal>
  );
};

export default ModalFixedSizeList;

