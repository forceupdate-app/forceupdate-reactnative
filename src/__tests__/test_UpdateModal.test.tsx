declare global {
  namespace NodeJS {
    interface Global {
      updateButtonOnPress: () => void;
      dismissButtonOnPress: () => void;
    }
  }
}

import React from 'react';
import { render } from '@testing-library/react-native';
import { Alert, Linking } from 'react-native';
import UpdateModal from '../components/UpdateModal';
import { Text } from 'react-native';

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn(),
}));

const mockOnDismiss = jest.fn();
const mockOnUpdate = jest.fn();

jest.spyOn(Alert, 'alert').mockImplementation((_, __, buttons) => {
  if (buttons) {
    buttons.forEach((button) => {
      if (button.text === 'Update Now') {
        (global as any).updateButtonOnPress = button.onPress;
      } else if (button.text === 'Dismiss') {
        (global as any).dismissButtonOnPress = button.onPress;
      }
    });
  }
});

describe('UpdateModal', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call handleUpdate function when "Dismiss" button is pressed', () => {
    const storeUrl = 'https://example.com';
    render(
      <UpdateModal
        message="Update available"
        store_url={storeUrl}
        title="Update"
        update_button_text="Update Now"
        dismiss_button_text="Dismiss"
        onDismiss={mockOnDismiss}
        onUpdate={mockOnUpdate}
      >
        <Text>App background</Text>
      </UpdateModal>
    );

    (global as any).dismissButtonOnPress();

    expect(mockOnDismiss).toHaveBeenCalledTimes(1);
  });

  it('should call onDismiss function when "Update Now" button is pressed', () => {
    const storeUrl = 'https://example.com';
    render(
      <UpdateModal
        message="Update available"
        store_url={storeUrl}
        title="Update"
        update_button_text="Update Now"
        dismiss_button_text="Dismiss"
        onDismiss={mockOnDismiss}
        onUpdate={mockOnUpdate}
      >
        <Text>App background</Text>
      </UpdateModal>
    );

    (global as any).updateButtonOnPress();

    expect(Linking.openURL).toHaveBeenCalledWith(storeUrl);
    expect(mockOnUpdate).toHaveBeenCalledTimes(1);
  });

  it('the background of app should appear if the property "showAppBackground" is true', () => {
    const storeUrl = 'https://example.com';
    const { getByTestId } = render(
      <UpdateModal
        message="Update available"
        store_url={storeUrl}
        title="Update"
        update_button_text="Update Now"
        dismiss_button_text="Dismiss"
        onDismiss={mockOnDismiss}
        onUpdate={mockOnUpdate}
        showAppBackground={true}
      >
        <Text>App background</Text>
      </UpdateModal>
    );

    expect(getByTestId('app-background')).toBeTruthy();
  });

  it('the background of app should not appear if the property "showAppBackground" is false', () => {
    const storeUrl = 'https://example.com';
    const { queryByTestId } = render(
      <UpdateModal
        message="Update available"
        store_url={storeUrl}
        title="Update"
        update_button_text="Update Now"
        dismiss_button_text="Dismiss"
        onDismiss={mockOnDismiss}
        onUpdate={mockOnUpdate}
        showAppBackground={false}
      >
        <Text>App background</Text>
      </UpdateModal>
    );

    expect(queryByTestId('app-background')).toBeNull();
  });
});
