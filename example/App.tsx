import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ForceUpdate } from 'reactnative-forceupdate';

interface ListItem {
  id: number;
  title: string;
}

const data: ListItem[] = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
];

const App: React.FC = () => {
  const renderItem = ({ item }: { item: ListItem }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <ForceUpdate
      api_key={
        '6bbc51d23e5938d512a62a83c230dfdef89ab7a2c75bdc1f0f42909d5e04feb5'
      }
      language={'en'}
      platform={'ANDROID'}
      version={'3.0.2'}
    >
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ForceUpdate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39cb31',
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default App;
