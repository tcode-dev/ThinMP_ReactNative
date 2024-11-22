import { StyleSheet, View } from 'react-native';
import { Style } from '@/constants/Style';
import PrimaryTitle from '@/components/atoms/Title/PrimaryTitle';

export type Props = {
  title: string;
  height: number;
};

const CustomHeaderBackgroundPresenter: React.FC<Props> = ({ title, height }) => {
  return (
    <View style={[styles.container, { height }]}>
      <PrimaryTitle style={[{ height: Style.headerTitleHeight, lineHeight: Style.headerTitleHeight }]}>{title}</PrimaryTitle>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f2f2f7',
  },
});

export default CustomHeaderBackgroundPresenter;
