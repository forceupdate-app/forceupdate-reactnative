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
        '2ea8dc1570a5bfc9c77f50337495ffef776d4cedeef90e853cfb5c9d20602066'
      }
      language={'en'}
      platform={'IOS'}
      version={'1.0.0'}
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
