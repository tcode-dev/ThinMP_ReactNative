import { StyleSheet, View } from 'react-native';
import PrimaryTitle from '@/components/atoms/Title/PrimaryTitle';

export type Props = {
  title: string;
  height: number;
};

const CustomHeaderBackgroundPresenter: React.FC<Props> = ({ height, title }) => {
  return (
    <View style={[styles.container]}>
      <PrimaryTitle style={[{ height, lineHeight: height }]}>{title}</PrimaryTitle>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#f2f2f7',
  },
});

export default CustomHeaderBackgroundPresenter;
