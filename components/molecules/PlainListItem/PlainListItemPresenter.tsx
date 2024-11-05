import { View, StyleSheet } from 'react-native';
import { PrimaryText, Props } from '@/components/atoms/Text';

const PlainListItemPresenter: React.FC<Pick<Props, 'children'>> = ({ children }) => {
  return (
    <View style={styles.container}>
      <PrimaryText>{children}</PrimaryText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginLeft: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default PlainListItemPresenter;
