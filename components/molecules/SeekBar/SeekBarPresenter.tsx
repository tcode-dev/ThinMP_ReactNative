import { StyleSheet, View } from 'react-native';
import Slider, { SliderProps } from '@react-native-community/slider';
import { PlainText } from '@/components/atoms/Text';

type Props = {
  currentTime: string;
  duration: string
} & Pick<SliderProps, 'value' | 'onSlidingStart' | 'onSlidingComplete' | 'onValueChange'>;

const SeekBarPresenter: React.FC<Props> = ({ value, currentTime, duration, onSlidingStart, onSlidingComplete, onValueChange }) => {
  return (
    <View>
      <Slider
        value={value}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSlidingComplete}
        onValueChange={onValueChange}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#cccccc"
        maximumTrackTintColor="#000000"
        style={styles.slider}
      />
      <View style={styles.time}>
        <PlainText>{currentTime}</PlainText>
        <PlainText>{duration}</PlainText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: '100%',
    height: 40,
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    marginLeft: 20,
  }
});

export default SeekBarPresenter;
