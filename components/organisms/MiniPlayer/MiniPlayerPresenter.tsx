import { View, StyleSheet } from 'react-native';
import { SongProps } from 'audio';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import { PrimaryText } from '@/components/atoms/Text';
import PlayButton from '@/components/molecules/PlaybackButton/PlayButton';
import PauseButton from '@/components/molecules/PlaybackButton/PauseButton';
import CustomLink from '@/components/molecules/CustomLink';

export type Props = {
  href: string;
  bottom: number;
  isPlaying: boolean;
} & SongProps;

const MiniPlayerPresenter: React.FC<Props> = ({ name, imageId, href, bottom, isPlaying }) => {
  return (
    <View style={[styles.outer, { bottom }]}>
      <CustomLink href={href}>
        <View style={[styles.container]}>
          <View style={styles.left}>
            <View style={styles.artwork}>
              <ArtworkImage imageId={imageId} width={40} height={40} borderRadius={4} />
            </View>
            <PrimaryText>{name}</PrimaryText>
          </View>
          <View>{isPlaying ? <PauseButton /> : <PlayButton />}</View>
        </View>
      </CustomLink>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
  container: {
    width: '100%',
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  artwork: {
    marginRight: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MiniPlayerPresenter;
