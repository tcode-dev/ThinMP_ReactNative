import { Link, Href } from 'expo-router';
import { FlatList, View } from 'react-native';

type MenuItem = {
  href: Href<string>;
  text: string;
};
const Menu: MenuItem[] = [
  { href: '/artists', text: 'Artists' },
  { href: '/songs', text: 'Songs' },
];

const IndexPage = () => {
  return (
    <View>
      <FlatList
        data={Menu}
        renderItem={({ item }) => <Link href={item.href}>{item.text}</Link>}
      />
    </View>
  );
}

export default IndexPage;
