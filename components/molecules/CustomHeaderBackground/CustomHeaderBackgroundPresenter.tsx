import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { getHeaderHeight, Style } from '@/constants/Style';
import PrimaryTitle from '@/components/atoms/Title/PrimaryTitle';

export type Props = {
  title: string;
};

const CustomHeaderBackgroundPresenter: React.FC<Props> = ({ title }) => {
  return (
    <BlurView intensity={50} style={styles.container} experimentalBlurMethod='dimezisBlurView'>
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
    height: getHeaderHeight(),
  },
});

export default CustomHeaderBackgroundPresenter;
