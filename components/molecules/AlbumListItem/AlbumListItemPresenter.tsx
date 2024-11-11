import { View, StyleSheet } from 'react-native';
import { AlbumProps } from 'audio';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import { PrimaryText, SecondaryText } from '@/components/atoms/Text';
import { Href, Link } from 'expo-router';

export type Props = AlbumProps & {
  itemWidth: number;
  imageWidth: number;
  href: Href;
};

const AlbumListItemPresenter: React.FC<Props> = ({ name, artistName, imageId, itemWidth, imageWidth, href }) => {
  return (
    <Link href={href}>
      <View style={{ width: itemWidth, ...styles.container }}>
        <View style={styles.artwork}>
          <ArtworkImage imageId={imageId} size={imageWidth} borderRadius={4} />
        </View>
        <View style={styles.text}>
          <PrimaryText>{name}</PrimaryText>
          <SecondaryText>{artistName}</SecondaryText>
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  artwork: {
    marginBottom: 5,
  },
  text: {
    alignItems: 'center',
  },
});

export default AlbumListItemPresenter;
