import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ICenter {
  children: React.ReactNode;
}

export const CenterComponent: React.FC<ICenter> = ({ children }) => {
  return (
    <View testID="center-container" style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
