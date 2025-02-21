import { StyleSheet, View } from 'react-native';
import { getHeaderHeight } from '@/constants/Style';

type Props = {
  height: number;
};

const EmptyFooterPresenter: React.FC<Props> = ({ height }) => <View style={[styles.container, { height }]} />;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default EmptyFooterPresenter;
