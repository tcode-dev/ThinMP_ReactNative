import { BlurView } from 'expo-blur';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { PrimaryText } from '@/components/atoms/Text';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import NextButton from '@/components/molecules/button/NextButton';
import PlaybackButton from '@/components/molecules/button/PlaybackButton';
import CustomLink from '@/components/molecules/CustomLink';
import { SongProps } from 'audio';

export type Props = {
  href: string;
  bottom: number;
  style?: StyleProp<ViewStyle>;
} & SongProps;

const MiniPlayerPresenter: React.FC<Props> = ({ name, imageId, href, bottom, style }) => {
  return (
    <View style={styles.outer}>
      <CustomLink href={href}>
        <BlurView style={styles.blur} intensity={100} />
        <View style={[styles.container, style, { height: 50 + bottom, paddingBottom: bottom }]}>
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
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
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
