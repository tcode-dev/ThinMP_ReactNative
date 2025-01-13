import { StyleSheet } from 'react-native';
import PlainText, { Props } from '@/components/atoms/text/PlainText';

const PrimaryTitlePresenter: React.FC<Props> = ({ children, style }) => <PlainText style={[styles.text, style]}>{children}</PlainText>;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PrimaryTitlePresenter;
