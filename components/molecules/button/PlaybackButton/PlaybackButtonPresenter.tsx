import PlayButton from '@/components/molecules/button/PlaybackButton/PlayButton';
import PauseButton from '@/components/molecules/button/PlaybackButton/PauseButton';

type Props = {
  isPlaying: boolean;
};

const PlaybackButtonPresenter: React.FC<Props> = ({ isPlaying }) => {
  return isPlaying ? <PauseButton /> : <PlayButton />;
};

export default PlaybackButtonPresenter;
