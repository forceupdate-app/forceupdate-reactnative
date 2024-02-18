import React from 'react';
import { render } from '@testing-library/react-native';
import ErrorComponent from '../components/ErrorComponent';

describe('ErrorComponent', () => {
  it('renders the error message correctly', () => {
    const errorMessage = 'This is an error message';
    const { getByText } = render(
      <ErrorComponent errorMessage={errorMessage} />
    );
    expect(getByText(errorMessage)).toBeTruthy();
  });
});
