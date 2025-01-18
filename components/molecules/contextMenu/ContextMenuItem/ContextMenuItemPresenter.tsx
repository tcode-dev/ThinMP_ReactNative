import { StyleSheet, View } from 'react-native';
import PlainText from '@/components/atoms/text/PlainText';

export type Props = {
  children: React.ReactNode;
}

const ContextMenuItemPresenter: React.FC<Props> = ({ children }) => (
  <View style={styles.container}>
    <PlainText>{children}</PlainText>
  </View>
);

const styles = StyleSheet.create({
  container: {

  },
});

export default ContextMenuItemPresenter;
