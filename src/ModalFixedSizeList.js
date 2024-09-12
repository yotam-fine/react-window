import React from 'react';
import { FixedSizeList } from 'react-window';
import Modal from 'react-modal';

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
  renderRow,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="List Modal"
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
      <FixedSizeList
        height={listHeight}
        width={listWidth}
        itemCount={itemCount}
        itemSize={itemSize}
        itemData={itemData}
      >
        {renderRow}
      </FixedSizeList>
    </Modal>
  );
};

export default ModalFixedSizeList;

