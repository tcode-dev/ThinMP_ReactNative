import { StyleSheet } from 'react-native';
import PlainText, { Props } from '@/components/atoms/text/PlainText';

const SectionTitlePresenter: React.FC<Props> = ({ children, style }) => <PlainText style={[styles.text, style]}>{children}</PlainText>;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingLeft: 20,
    paddingTop: 20,
  },
});

export default SectionTitlePresenter;
