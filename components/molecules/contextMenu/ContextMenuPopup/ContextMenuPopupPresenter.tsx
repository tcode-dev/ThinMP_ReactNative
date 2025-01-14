import { StyleSheet, View } from 'react-native';

export type Props = {
  children: React.ReactNode[];
}

const ContextMenuPopupPresenter: React.FC<Props> = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {

  },
});

export default ContextMenuPopupPresenter;
