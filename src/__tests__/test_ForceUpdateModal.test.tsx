import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Alert, Linking } from 'react-native';
import { ForceUpdateModal } from '../components/ForceUpdateModal';

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn(),
}));

const mockOnForceUpdate = jest.fn();

jest.spyOn(Alert, 'alert').mockImplementation((_, __, buttons) => {
  if (buttons) {
    buttons.forEach((button) => {
      if (button.text === 'Update Now' && button.onPress) {
        button.onPress();
      }
    });
  }
});

describe('ForceUpdateModal', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onForceUpdate and open store URL when "Update Now" button is pressed', () => {
    const storeUrl = 'https://example.com';
    const { getByText } = render(
      <ForceUpdateModal
        message="Update available"
        title="Update"
        update_button_text="Update Now"
        store_url={storeUrl}
        onForceUpdate={mockOnForceUpdate}
      />
    );

    fireEvent.press(getByText('Update Now'));

    expect(Linking.openURL).toHaveBeenCalledWith(storeUrl);
    expect(mockOnForceUpdate).toHaveBeenCalledTimes(1);
  });

  describe('Callback functions', () => {
    it('should do nothing when onForceUpdate is undefined and force_update is true', async () => {
      const storeUrl = 'https://example.com';
      const { getByText } = render(
        <ForceUpdateModal
          message="Update available"
          title="Update"
          update_button_text="Update Now"
          store_url={storeUrl}
          onForceUpdate={() => {}}
        />
      );

      fireEvent.press(getByText('Update Now'));

      expect(Linking.openURL).toHaveBeenCalledWith(storeUrl);
      expect(mockOnForceUpdate).not.toHaveBeenCalled();
    });
  });

  it('should check if onForceUpdate params are () => {}', () => {
    const storeUrl = 'https://example.com';
    const { getByText } = render(
      <ForceUpdateModal
        message="Update available"
        title="Update"
        update_button_text="Update Now"
        store_url={storeUrl}
        onForceUpdate={() => {}}
      />
    );

    fireEvent.press(getByText('Update Now'));

    expect(Linking.openURL).toHaveBeenCalledWith(storeUrl);
    expect(mockOnForceUpdate).not.toHaveBeenCalled();
  });
});
