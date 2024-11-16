import { StyleSheet } from 'react-native';
import PlainText, { Props } from '@/components/atoms/Text/PlainText';

const SectionTitle: React.FC<Props> = ({ children, style }) => {
  return <PlainText style={[styles.text, style]}>{children}</PlainText>;
};

const styles = StyleSheet.create({
  text: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default SectionTitle;
