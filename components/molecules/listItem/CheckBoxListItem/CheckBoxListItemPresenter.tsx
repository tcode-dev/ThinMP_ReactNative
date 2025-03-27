import { View, StyleSheet } from 'react-native';
import PrimaryText, { Props as TextProps } from '@/components/atoms/text/PrimaryText';
import CheckBox, { Props as CheckBoxProps } from '@/components/atoms/CheckBox';

export type Props = {
  borderBottomColor: string;
  backgroundColor: string;
} & Pick<TextProps, 'children'> & CheckBoxProps;

const CheckBoxListItemPresenter: React.FC<Props> = ({ children, isChecked, borderBottomColor, backgroundColor, onPress }) => (
  <View style={[styles.container, { borderBottomColor, backgroundColor }]}>
    <CheckBox isChecked={isChecked} onPress={onPress} />
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

export default CheckBoxListItemPresenter;
