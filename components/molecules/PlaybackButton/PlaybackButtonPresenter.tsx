import PlayButton from '@/components/molecules/PlaybackButton/PlayButton';
import PauseButton from '@/components/molecules/PlaybackButton/PauseButton';

type Props = {
  isPlaying: boolean;
};

const PlaybackButtonPresenter: React.FC<Props> = ({ isPlaying }) => {
  return isPlaying ? <PauseButton /> : <PlayButton />;
};

export default PlaybackButtonPresenter;
