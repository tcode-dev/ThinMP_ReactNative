import { StyleSheet } from 'react-native';
import PlainText, { Props } from '@/components/atoms/text/PlainText';

const SecondaryTitlePresenter: React.FC<Props> = ({ children, style }) => {
  return <PlainText style={[styles.text, style]}>{children}</PlainText>;
};

const styles = StyleSheet.create({
  text: {},
});

export default SecondaryTitlePresenter;
