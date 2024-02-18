import '@testing-library/react-native/extend-expect';
import React from 'react';
import { render } from '@testing-library/react-native';
import { CenterComponent } from '../components/Center';
import { Text } from 'react-native';

describe('CenterComponent', () => {
  it('renders children inside a centered container', () => {
    const { getByTestId } = render(
      <CenterComponent>
        <Text testID="child">Hello, World!</Text>
      </CenterComponent>
    );

    const child = getByTestId('child');
    expect(child).toBeTruthy();

    const container = getByTestId('center-container'); // Assuming you have a testID for the center container
    expect(container).toHaveStyle({
      justifyContent: 'center',
      alignItems: 'center',
    });
  });
});
