import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { Style } from '@/constants/Style';
import PrimaryTitle from '@/components/atoms/Title/PrimaryTitle';

export type Props = {
  title: string;
  height: number;
};

const CustomHeaderBackgroundPresenter: React.FC<Props> = ({ title, height }) => {
  return (
    <BlurView intensity={50} style={[styles.container, { height }]} experimentalBlurMethod='dimezisBlurView'>
      <PrimaryTitle style={[{ height: Style.headerTitleHeight, lineHeight: Style.headerTitleHeight }]}>{title}</PrimaryTitle>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
});

export default CustomHeaderBackgroundPresenter;
