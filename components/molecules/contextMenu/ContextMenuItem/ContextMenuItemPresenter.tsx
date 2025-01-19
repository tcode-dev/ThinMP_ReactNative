import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PrimaryText from '@/components/atoms/text/PrimaryText';

export type Props = {
  label: string;
  onPress: () => void;
}

const ContextMenuItemPresenter: React.FC<Props> = ({ label, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.container]}>
      <PrimaryText>{label}</PrimaryText>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 50,
    paddingRight: 20,
    paddingLeft: 20,
  },
});

export default ContextMenuItemPresenter;
