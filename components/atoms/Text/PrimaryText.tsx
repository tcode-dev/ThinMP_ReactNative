import { StyleSheet } from 'react-native';
import PlainText, { Props } from './PlainText';

const PrimaryText: React.FC<Pick<Props, 'children'>> = ({ children }) => {
  return (
    <PlainText style={styles.text}>{children}</PlainText>
  );
}

const styles = StyleSheet.create({
  text: {

  },
});

export default PrimaryText;
