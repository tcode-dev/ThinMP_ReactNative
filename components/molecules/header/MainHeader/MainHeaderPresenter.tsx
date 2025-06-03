import { StyleSheet, View } from 'react-native';
import PlainText from '@/components/atoms/text/PlainText';
import MainMenuButton from '@/components/molecules/button/menu/MainMenuButton';
import { getHeaderHeight, Style } from '@/constants/Style';

const padding = 10;

type Props = {
  borderColor: string; 
  title: string 
};

const MainHeaderPresenter: React.FC<Props> = ({ borderColor, title }) => (
  <View style={styles.container}>
    <View style={[styles.content, {borderBottomColor: borderColor}]}>
      <PlainText style={styles.title}>{title}</PlainText>
      <MainMenuButton />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: getHeaderHeight() + padding,
    position: 'relative',
  },
  content: {
    height: Style.rowHeight + padding,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    paddingBottom: padding,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default MainHeaderPresenter;
