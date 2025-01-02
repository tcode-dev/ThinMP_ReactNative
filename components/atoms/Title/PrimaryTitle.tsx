import { StyleSheet } from 'react-native';
import { PlainText, Props } from '@/components/atoms/Text/PlainText';

const PrimaryTitle: React.FC<Props> = ({ children, style }) => {
  return <PlainText style={[styles.text, style]}>{children}</PlainText>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PrimaryTitle;
