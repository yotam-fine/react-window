import React, { PureComponent, useState } from 'react';
import { FixedSizeList } from 'react-window';
import ModalFixedSizeList from '../../../src/ModalFixedSizeList';
import CodeBlock from '../../components/CodeBlock';
import ProfiledExample from '../../components/ProfiledExample';

import CODE_HORIZONTAL from '../../code/FixedSizeListHorizontal.js';
import CODE_VERTICAL from '../../code/FixedSizeListVertical.js';

import styles from './shared.module.css';

class Item extends PureComponent {
  render() {
    const { data, index, style } = this.props;

    return (
      <div
        className={index % 2 ? styles.ListItemOdd : styles.ListItemEven}
        style={style}
      >
        {data} {index}
      </div>
    );
  }
}

export default function() {
  return (
    <div className={styles.ExampleWrapper}>
      <h1 className={styles.ExampleHeader}>Basic List</h1>
      <div className={styles.Example}>
        <ProfiledExample
          className={styles.ExampleDemo}
          sandbox="fixed-size-list-vertical"
        >
          <FixedSizeList
            className={styles.List}
            height={150}
            itemCount={1000}
            itemData="Row"
            itemSize={35}
            width={300}
          >
            {Item}
          </FixedSizeList>
        </ProfiledExample>
        <div className={styles.ExampleCode}>
          <CodeBlock value={CODE_VERTICAL} />
        </div>
      </div>
      <div className={styles.Example}>
        <ProfiledExample
          className={styles.ExampleDemo}
          sandbox="fixed-size-list-horizontal"
        >
          <FixedSizeList
            className={styles.List}
            height={75}
            itemCount={1000}
            itemData="Column"
            itemSize={100}
            layout="horizontal"
            width={300}
          >
            {Item}
          </FixedSizeList>
        </ProfiledExample>
        <div className={styles.ExampleCode}>
          <CodeBlock value={CODE_HORIZONTAL} />
        </div>
      </div>
      </div>
      <div className={styles.Example}>
        <ProfiledExample
          className={styles.ExampleDemo}
          sandbox="modal-fixed-size-list"
        >
          <ModalExample />
        </ProfiledExample>
        <div className={styles.ExampleCode}>
          <CodeBlock value={`// Example code for ModalFixedSizeList`} />
        </div>
      </div>
    </div>
  );
}

function ModalExample() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div>
      <button onClick={toggleModal}>Toggle Modal</button>
      <ModalFixedSizeList
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        listHeight={300}
        listWidth={300}
        itemCount={1000}
        itemSize={35}
        itemData={Array.from({ length: 1000 }, (_, index) => `Item ${index}`)}
        modalStyles={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      />
    </div>
  );
}

