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
  backgroundColor: string;
} & SongProps;

const MiniPlayerPresenter: React.FC<Props> = ({ name, imageId, href, bottom, backgroundColor }) => {
  return (
    <View style={styles.outer}>
      <CustomLink href={href}>
        <View style={[styles.container, { height: 50 + bottom, paddingBottom: bottom, backgroundColor }]}>
          <View style={styles.left}>
            <View style={styles.artwork}>
              <ArtworkImage imageId={imageId} width={40} height={40} borderRadius={4} />
            </View>
            <PrimaryText>{name}</PrimaryText>
          </View>
          <View style={styles.right}>
            <PlaybackButton buttonSize={50} iconSize={35} />
            <NextButton buttonSize={50} iconSize={35} />
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
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
