import { StyleSheet, Text, View } from 'react-native';

import * as Audio from 'audio';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{Audio.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
