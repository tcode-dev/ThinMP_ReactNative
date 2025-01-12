import { StyleSheet } from 'react-native';
import { PlainText, Props } from '../PlainText';

const SecondaryTextPresenter: React.FC<Props> = ({ children, style }) => {
  return <PlainText style={[styles.text, style]}>{children}</PlainText>;
};

const styles = StyleSheet.create({
  text: {},
});

export default SecondaryTextPresenter;
