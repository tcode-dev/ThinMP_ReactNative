import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SongProps } from 'audio';
import { Play } from '@/type/Audio';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import { PrimaryText } from '@/components/atoms/Text';

export type Props = {
  bottom: number;
} & SongProps;

const MiniPlayerPresenter: React.FC<Props> = ({ name, imageId, bottom }) => {
  return (
    <TouchableOpacity style={[styles.container, { bottom }]} onPress={() => { }}>
      <View style={styles.artwork}>
        <ArtworkImage imageId={imageId} width={40} height={40} borderRadius={4} />
      </View>
      <PrimaryText>{name}</PrimaryText>
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  artwork: {
    marginRight: 10,
  },
});

export default MiniPlayerPresenter;
