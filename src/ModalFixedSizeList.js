import React, { useState } from 'react';
import Modal from 'react-modal';
import { FixedSizeList } from './FixedSizeList';

// Ensure that the modal is attached to the app element
Modal.setAppElement('#root');

const ModalFixedSizeList = ({ listProps, modalProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open List in Modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Fixed Size List Modal"
        {...modalProps}
      >
        <button onClick={closeModal}>Close</button>
        <FixedSizeList {...listProps} />
      </Modal>
    </div>
  );
};

export default ModalFixedSizeList;

