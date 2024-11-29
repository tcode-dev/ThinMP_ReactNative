import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SongProps } from 'audio';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import { PrimaryText } from '@/components/atoms/Text';
import PlayButton from '@/components/molecules/PlaybackButton/PlayButton';
import PauseButton from '@/components/molecules/PlaybackButton/PauseButton';

export type Props = {
  bottom: number;
} & SongProps;

const MiniPlayerPresenter: React.FC<Props> = ({ name, imageId, bottom }) => {
  return (
    <TouchableOpacity style={[styles.container, { bottom }]} onPress={() => { }}>
      <View style={styles.left}>
        <View style={styles.artwork}>
          <ArtworkImage imageId={imageId} width={40} height={40} borderRadius={4} />
        </View>
        <PrimaryText>{name}</PrimaryText>
      </View>
      <View><PlayButton /><PauseButton /></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
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
