import { StyleSheet, View } from 'react-native';
import PlainText from '@/components/atoms/text/PlainText';
import MainMenuButton from '@/components/molecules/button/menu/MainMenuButton';
import { getHeaderHeight, Style } from '@/constants/Style';

type Props = { title: string };

const MainHeaderPresenter: React.FC<Props> = ({ title }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <PlainText style={styles.title}>{title}</PlainText>
      <MainMenuButton />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: getHeaderHeight(),
    position: 'relative',
  },
  content: {
    height: Style.rowHeight,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default MainHeaderPresenter;
