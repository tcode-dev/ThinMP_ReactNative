import { View, StyleSheet } from 'react-native';
import PrimaryText from '@/components/atoms/text/PrimaryText';
import SecondaryText from '@/components/atoms/text/SecondaryText';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import { SongModel } from '@/model/SongModel';
import SwipeableListItem from '@/components/molecules/listItem/SwipeableListItem';

export type Props = {
  borderBottomColor: string;
  remove: () => void;
} & SongModel;

const SongEditListItemPresenter: React.FC<Props> = ({ name, artistName, imageId, borderBottomColor, remove }) => (
  <SwipeableListItem remove={remove}>
    <View style={[styles.container, { borderBottomColor }]}>
      <View style={styles.artwork}>
        <ArtworkImage imageId={imageId} width={40} height={40} borderRadius={4} />
      </View>
      <View>
        <PrimaryText>{name}</PrimaryText>
        <SecondaryText>{artistName}</SecondaryText>
      </View>
    </View>
  </SwipeableListItem>
);

const styles = StyleSheet.create({
  artwork: {
    marginRight: 10,
  },
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 50,
    marginLeft: 20,
  },
});

export default SongEditListItemPresenter;
