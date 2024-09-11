import React from 'react';
import Modal from 'react-modal';
import { FixedSizeList } from './FixedSizeList';

Modal.setAppElement('#root'); // Set the app element for accessibility

const ModalFixedSizeList = ({
  isOpen,
  onRequestClose,
  contentLabel,
  ...listProps
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
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

