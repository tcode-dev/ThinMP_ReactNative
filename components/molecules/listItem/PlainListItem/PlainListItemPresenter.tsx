import { View, StyleSheet } from 'react-native';
import PrimaryText, { Props as TextProps } from '@/components/atoms/text/PrimaryText';

export type Props = {
  borderBottomColor: string;
} & Pick<TextProps, 'children'>;

const PlainListItemPresenter: React.FC<Props> = ({ children, borderBottomColor }) => (
  <View style={[styles.container, { borderBottomColor }]}>
    <PrimaryText>{children}</PrimaryText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    height: 50,
    marginLeft: 20,
  },
});

export default PlainListItemPresenter;
