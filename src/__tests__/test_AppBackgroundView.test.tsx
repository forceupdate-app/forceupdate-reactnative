import React from 'react';
import { render } from '@testing-library/react-native';
import { AppBackgroundView } from '../components/AppBackgroundView';
import { Text } from 'react-native';

describe('AppBackgroundView', () => {
  it('should render children inside the app background view', () => {
    const { getByTestId, getByText } = render(
      <AppBackgroundView>
        <Text>App background</Text>
      </AppBackgroundView>
    );

    const appBackgroundView = getByTestId('app-background');
    const childText = getByText('App background');

    expect(appBackgroundView).toBeTruthy();
    expect(childText).toBeTruthy();
  });
});
