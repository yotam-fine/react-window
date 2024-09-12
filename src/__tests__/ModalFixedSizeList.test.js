import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalFixedSizeList from '../ModalFixedSizeList';
import { FixedSizeList } from 'react-window';

jest.mock('react-window', () => ({
  FixedSizeList: jest.fn(() => <div>FixedSizeList</div>),
}));

describe('ModalFixedSizeList', () => {
  const listProps = {
    height: 300,
    itemCount: 1000,
    itemSize: 35,
    width: 300,
    children: ({ index, style }) => <div style={style}>Row {index}</div>,
  };

  it('renders the modal when isOpen is true', () => {
    const { getByText } = render(
      <ModalFixedSizeList
        isOpen={true}
        onRequestClose={jest.fn()}
        modalProps={{ contentLabel: 'List Modal' }}
        listProps={listProps}
      />
    );

    expect(getByText('FixedSizeList')).toBeInTheDocument();
  });

  it('does not render the modal when isOpen is false', () => {
    const { queryByText } = render(
      <ModalFixedSizeList
        isOpen={false}
        onRequestClose={jest.fn()}
        modalProps={{ contentLabel: 'List Modal' }}
        listProps={listProps}
      />
    );

    expect(queryByText('FixedSizeList')).not.toBeInTheDocument();
  });

  it('calls onRequestClose when the modal requests to close', () => {
    const onRequestClose = jest.fn();
    const { getByRole } = render(
      <ModalFixedSizeList
        isOpen={true}
        onRequestClose={onRequestClose}
        modalProps={{ contentLabel: 'List Modal' }}
        listProps={listProps}
      />
    );

    fireEvent.click(getByRole('button', { name: /close/i }));
    expect(onRequestClose).toHaveBeenCalled();
  });

  it('passes the correct props to FixedSizeList', () => {
    render(
      <ModalFixedSizeList
        isOpen={true}
        onRequestClose={jest.fn()}
        modalProps={{ contentLabel: 'List Modal' }}
        listProps={listProps}
      />
    );

    expect(FixedSizeList).toHaveBeenCalledWith(expect.objectContaining(listProps), {});
  });
});

