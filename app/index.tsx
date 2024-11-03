import MainMenu from '@/components/organisms/main/MainMenu';
import { View, StyleSheet } from 'react-native';

const MainPage = () => {
  return (
    <View style={styles.container}>
      <MainMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});

export default MainPage;
