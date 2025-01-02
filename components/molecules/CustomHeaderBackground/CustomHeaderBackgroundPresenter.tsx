import { BlurView } from 'expo-blur';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import PrimaryTitle from '@/components/atoms/Title/PrimaryTitle';
import { getHeaderHeight, Style } from '@/constants/Style';

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
  blur: {
    zIndex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    height: getHeaderHeight(),
    position: 'relative',
    width: '100%',
  },
  title: {
    height: Style.headerTitleHeight,
    lineHeight: Style.headerTitleHeight,
    textAlign: 'center',
    width: '100%',
  },
  titleContainer: {
    bottom: 0,
    height: Style.headerTitleHeight,
    left: 0,
    position: 'absolute',
    right: 0,
    zIndex: 2,
  },
});

export default CustomHeaderBackgroundPresenter;
