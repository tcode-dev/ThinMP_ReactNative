import Slider from '@react-native-community/slider';

type Props = {
  onPress: () => void;
};

const SeekbarPresenter: React.FC<Props> = ({ onPress }) => {
  return (
    <Slider
    style={{ width: '100%', height: 40 }}
    minimumValue={0}
    maximumValue={1}
    minimumTrackTintColor="#cccccc"
    maximumTrackTintColor="#000000"
  />
  );
};

export default SeekbarPresenter;
