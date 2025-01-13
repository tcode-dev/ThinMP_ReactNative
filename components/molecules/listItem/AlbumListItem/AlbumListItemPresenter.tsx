import { Href, Link } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import PrimaryText from '@/components/atoms/text/PrimaryText';
import SecondaryText from '@/components/atoms/text/SecondaryText';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import { AlbumProps } from 'audio';

export type Props = AlbumProps & {
  itemWidth: number;
  imageWidth: number;
  href: Href;
};

const AlbumListItemPresenter: React.FC<Props> = ({ name, artistName, imageId, itemWidth, imageWidth, href }) => (
  <Link href={href}>
    <View style={{ width: itemWidth, ...styles.container }}>
      <View style={styles.artwork}>
        <ArtworkImage imageId={imageId} width={imageWidth} height={imageWidth} borderRadius={4} />
      </View>
      <View style={styles.text}>
        <PrimaryText>{name}</PrimaryText>
        <SecondaryText>{artistName}</SecondaryText>
      </View>
    </View>
  </Link>
);

const styles = StyleSheet.create({
  artwork: {
    marginBottom: 5,
  },
  container: {
    padding: 10,
  },
  text: {
    alignItems: 'center',
  },
});

export default AlbumListItemPresenter;
