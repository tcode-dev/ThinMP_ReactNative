import { BlurView } from 'expo-blur';
import { StyleProp, View, ViewStyle, StyleSheet } from 'react-native';

export type Props = {
  style?: StyleProp<ViewStyle>;
  intensity?: number | undefined
}

const BackgroundBlurViewPresenter: React.FC<Props> = ({ intensity, style }) => (
  <View style={[styles.container, style]}>
    <BlurView style={styles.blur} intensity={intensity} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  blur: {
    zIndex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});

export default BackgroundBlurViewPresenter;
