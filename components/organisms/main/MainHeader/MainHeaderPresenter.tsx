import { StyleSheet, View } from 'react-native';
import PlainText from '@/components/atoms/text/PlainText';
import { getHeaderHeight, Style } from '@/constants/Style';
import MainMenuButton from '@/components/molecules/button/MainMenuButton';

type Props = { title: string };

const MainHeaderPresenter: React.FC<Props> = ({ title }) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
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
  titleContainer: {
    height: Style.rowHeight,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2,
  },
  title: {
    width: '100%',
    height: Style.rowHeight,
    lineHeight: Style.rowHeight,
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default MainHeaderPresenter;
