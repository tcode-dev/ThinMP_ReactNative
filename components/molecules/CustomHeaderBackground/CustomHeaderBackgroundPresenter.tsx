import { StyleSheet, View } from 'react-native';
import BackgroundBlurView from '@/components/atoms/BackgroundBlurView';
import PrimaryTitle from '@/components/atoms/title/PrimaryTitle/PrimaryTitlePresenter';
import { getHeaderHeight, Style } from '@/constants/Style';

export type Props = {
  title: string;
};

const CustomHeaderBackgroundPresenter: React.FC<Props> = ({ title }) => (
  <View style={styles.container}>
    <BackgroundBlurView />
    <View style={styles.titleContainer}>
      <PrimaryTitle style={styles.title}>{title}</PrimaryTitle>
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
    height: Style.headerTitleHeight,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2,
  },
  title: {
    width: '100%',
    height: Style.headerTitleHeight,
    lineHeight: Style.headerTitleHeight,
    textAlign: 'center',
  },
});

export default CustomHeaderBackgroundPresenter;
