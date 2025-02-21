import { View, StyleSheet } from 'react-native';
import BackgroundBlurView from '@/components/atoms/BackgroundBlurView';
import PrimaryText from '@/components/atoms/text/PrimaryText';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import NextButton from '@/components/molecules/button/NextButton';
import PlaybackButton from '@/components/molecules/button/PlaybackButton';
import CustomLink from '@/components/molecules/CustomLink';
import { SongModel } from '@/model/SongModel';

export type Props = {
  href: string;
  bottom: number;
} & SongModel;

const MiniPlayerPresenter: React.FC<Props> = ({ name, imageId, href, bottom }) => (
  <View style={styles.outer}>
    <CustomLink href={href}>
      <BackgroundBlurView />
      <View style={[styles.container, { height: 50 + bottom, paddingBottom: bottom }]}>
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

const styles = StyleSheet.create({
  outer: {
    bottom: 0,
    position: 'absolute',
    zIndex: 1,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    position: 'relative',
    zIndex: 2,
  },
  left: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  right: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  artwork: {
    marginRight: 10,
  },
});

export default MiniPlayerPresenter;
