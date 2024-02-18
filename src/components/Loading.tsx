import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { CenterComponent } from './Center';

export const LoadingComponent = () => {
  return (
    <CenterComponent>
      <View testID="loading-component">
        <ActivityIndicator
          testID="activity-indicator"
          size="large"
          color="#0000ff"
        />
      </View>
    </CenterComponent>
  );
};
