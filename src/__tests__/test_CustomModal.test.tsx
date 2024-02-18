import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CustomModal } from '../components/CustomModal';

describe('CustomModal', () => {
  const mockButton1Press = jest.fn();
  const mockButton2Press = jest.fn();

  const buttons = [
    { text: 'Button 1', onPress: mockButton1Press },
    { text: 'Button 2', onPress: mockButton2Press },
  ];

  it('should render the modal with correct title, message, and buttons', () => {
    const title = 'Test Title';
    const message = 'Test Message';

    const { getByText } = render(
      <CustomModal title={title} message={message} buttons={buttons} />
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByText(message)).toBeTruthy();
    expect(getByText('Button 1')).toBeTruthy();
    expect(getByText('Button 2')).toBeTruthy();
  });

  it('should call the onPress function when a button is pressed', () => {
    const { getByText } = render(
      <CustomModal
        title="Test Title"
        message="Test Message"
        buttons={buttons}
      />
    );

    fireEvent.press(getByText('Button 1'));
    fireEvent.press(getByText('Button 2'));

    expect(mockButton1Press).toHaveBeenCalledTimes(1);
    expect(mockButton2Press).toHaveBeenCalledTimes(1);
  });
});
