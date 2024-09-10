import React from 'react';
import Modal from 'react-modal';
import { FixedSizeList } from 'react-window';

// Ensure that the app element is set for accessibility
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
  listStyles,
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
        style={listStyles}
        {...rest}
      >
        {({ index, style }) => (
          <div style={style}>
            {itemData[index]}
          </div>
        )}
      </FixedSizeList>
    </Modal>
  );
};

export default ModalFixedSizeList;

