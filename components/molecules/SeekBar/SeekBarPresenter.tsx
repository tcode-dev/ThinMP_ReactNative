import { StyleSheet } from 'react-native';
import Slider, { SliderProps } from '@react-native-community/slider';

type Props = Pick<SliderProps, 'value' | 'onValueChange'>;

const SeekBarPresenter: React.FC<Props> = ({ value, onValueChange }) => {
  return (
    <Slider
      value={value}
      onValueChange={onValueChange}
      minimumValue={0}
      maximumValue={1}
      minimumTrackTintColor="#cccccc"
      maximumTrackTintColor="#000000"
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
  },
});

export default SeekBarPresenter;
