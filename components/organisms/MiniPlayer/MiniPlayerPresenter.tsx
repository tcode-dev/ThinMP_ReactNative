import { View, StyleSheet } from 'react-native';
import { SongProps } from 'audio';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import { PrimaryText } from '@/components/atoms/Text';
import PlaybackButton from '@/components/molecules/button/PlaybackButton';
import CustomLink from '@/components/molecules/CustomLink';
import NextButton from '@/components/molecules/button/NextButton';

export type Props = {
  href: string;
  bottom: number;
} & SongProps;

const MiniPlayerPresenter: React.FC<Props> = ({ name, imageId, href, bottom }) => {
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
          <View style={styles.right}>
            <PlaybackButton size={50} />
            <NextButton />
          </View>
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
  right: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default MiniPlayerPresenter;
