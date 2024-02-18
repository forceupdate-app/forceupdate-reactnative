import React from 'react';
import { Text } from 'react-native';
import { CenterComponent } from './Center';

export default function ErrorComponent({
  errorMessage,
}: {
  errorMessage: string;
}) {
  return (
    <CenterComponent>
      <Text>{errorMessage}</Text>
    </CenterComponent>
  );
}
