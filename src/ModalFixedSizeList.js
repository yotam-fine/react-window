// src/ModalFixedSizeList.js

import React from 'react';
import Modal from 'react-modal';
import { FixedSizeList } from 'react-window';

// Ensure that the modal is attached to the app element
Modal.setAppElement('#root');

const ModalFixedSizeList = ({
  isOpen,
  onRequestClose,
  listHeight,
  listWidth,
  itemCount,
  itemSize,
  itemData,
  modalStyles,
  ...rest
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyles}
      contentLabel="List Modal"
    >
      <FixedSizeList
        height={listHeight}
        width={listWidth}
        itemCount={itemCount}
        itemSize={itemSize}
        itemData={itemData}
        {...rest}
      />
    </Modal>
  );
};

export default ModalFixedSizeList;

