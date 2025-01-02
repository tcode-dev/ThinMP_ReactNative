import { View, StyleSheet } from 'react-native';
import { PrimaryText } from '@/components/atoms/Text';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import NextButton from '@/components/molecules/button/NextButton';
import PlaybackButton from '@/components/molecules/button/PlaybackButton';
import CustomLink from '@/components/molecules/CustomLink';
import { SongProps } from 'audio';

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
  artwork: {
    marginRight: 10,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
  },
  left: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  outer: {
    bottom: 0,
    position: 'absolute',
    zIndex: 1,
  },
  right: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MiniPlayerPresenter;
