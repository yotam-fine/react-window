import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { FixedSizeList } from './FixedSizeList'; // Assuming FixedSizeList is exported from this path

// Ensure that the modal is attached to the app element
ReactModal.setAppElement('#root');

const ModalFixedSizeList = ({ itemCount, itemSize, width, height, itemData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open List Modal</button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
          },
        }}
      >
        <button onClick={closeModal} style={{ float: 'right' }}>Close</button>
        <FixedSizeList
          height={height}
          itemCount={itemCount}
          itemSize={itemSize}
          width={width}
          itemData={itemData}
        />
      </ReactModal>
    </div>
  );
};

export default ModalFixedSizeList;

