import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import { getHeaderHeight, Style } from '@/constants/Style';
import PrimaryTitle from '@/components/atoms/Title/PrimaryTitle';

export type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
};

const CustomHeaderBackgroundPresenter: React.FC<Props> = ({ title, style }) => {
  return (
    <View style={[styles.container, style]}>
      <BlurView style={styles.blur} intensity={100} />
      <View style={styles.titleContainer}>
        <PrimaryTitle style={styles.title}>{title}</PrimaryTitle>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: getHeaderHeight(),
  },
  blur: {
    zIndex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  titleContainer: {
    position: 'absolute',
    zIndex: 2,
    right: 0,
    bottom: 0,
    left: 0,
    height: Style.headerTitleHeight,
  },
  title: {
    width: '100%',
    height: Style.headerTitleHeight,
    lineHeight: Style.headerTitleHeight,
    textAlign: 'center',
  },
});

export default CustomHeaderBackgroundPresenter;
