import { StyleSheet, View } from 'react-native';
import { getHeaderHeight } from '@/constants/Style';

const EmptyHeader: React.FC = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    height: getHeaderHeight(),
    width: '100%',
  },
});

export default EmptyHeader;
