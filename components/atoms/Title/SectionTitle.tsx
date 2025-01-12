import { StyleSheet } from 'react-native';
import { PlainText, Props } from '@/components/atoms/text/PlainText';

const SectionTitle: React.FC<Props> = ({ children, style }) => {
  return <PlainText style={[styles.text, style]}>{children}</PlainText>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingLeft: 20,
    paddingTop: 20,
  },
});

export default SectionTitle;
