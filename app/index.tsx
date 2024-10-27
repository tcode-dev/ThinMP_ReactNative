import { Link } from 'expo-router';
import { View } from 'react-native';

const IndexPage = () => {
  return (
    <View>
      <Link href="/songs">songs</Link>
    </View>
  );
}

export default IndexPage;
