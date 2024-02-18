import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

interface AppBackgroundViewProps {
  children: React.ReactNode;
}

export const AppBackgroundView: React.FC<AppBackgroundViewProps> = ({
  children,
}) => {
  return (
    <View testID="app-background" style={styles.appBackground}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  appBackground: {
    flex: 1,
  },
});
