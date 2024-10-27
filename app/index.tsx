import { FlatList, Text, View } from 'react-native';

const IndexPage = () => {
  return (
    <View>
      <FlatList
        data={[
          { key: 'song' },
        ]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
}

export default IndexPage;
