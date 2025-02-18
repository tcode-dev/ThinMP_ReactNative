import Slider, { SliderProps } from '@react-native-community/slider';
import { StyleSheet, View } from 'react-native';
import PlainText from '@/components/atoms/text/PlainText';

type Props = {
  currentTimeFormatted: string;
  durationFormatted: string;
  duration: number;
  tint: string;
  minTint: string;
  maxTint: string;
} & Pick<SliderProps, 'value' | 'onSlidingStart' | 'onSlidingComplete' | 'onValueChange'>;

const SeekBarPresenter: React.FC<Props> = ({ value, currentTimeFormatted, durationFormatted, duration, tint, minTint, maxTint, onSlidingStart, onSlidingComplete, onValueChange }) => (
  <View style={styles.container}>
    <Slider
      value={value}
      onSlidingStart={onSlidingStart}
      onSlidingComplete={onSlidingComplete}
      onValueChange={onValueChange}
      step={1}
      minimumValue={0}
      maximumValue={duration}
      thumbTintColor={tint}
      minimumTrackTintColor={minTint}
      maximumTrackTintColor={maxTint}
      style={styles.slider}
    />
    <View style={styles.time}>
      <PlainText>{currentTimeFormatted}</PlainText>
      <PlainText>{durationFormatted}</PlainText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  slider: {
    height: 40,
    width: '100%',
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
});

export default SeekBarPresenter;
