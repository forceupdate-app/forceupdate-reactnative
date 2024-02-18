import React from 'react';
import { render } from '@testing-library/react-native';
import { LoadingComponent } from '../components/Loading';

describe('LoadingComponent', () => {
  it('renders the loading component', () => {
    const { getByTestId } = render(<LoadingComponent />);
    const loadingComponent = getByTestId('loading-component');
    expect(loadingComponent).toBeTruthy();
  });

  it('renders the activity indicator', () => {
    const { getByTestId } = render(<LoadingComponent />);
    const activityIndicator = getByTestId('activity-indicator');
    expect(activityIndicator).toBeTruthy();
  });
});
