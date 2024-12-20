import { View, StyleSheet } from 'react-native';
import { PrimaryText, Props as TextProps } from '@/components/atoms/Text';

export type Props = {
  borderBottomColor: string;
} & Pick<TextProps, 'children'>;

const PlainListItemPresenter: React.FC<Props> = ({ children, borderBottomColor }) => {
  return (
    <View style={[styles.container, { borderBottomColor }]}>
      <PrimaryText>{children}</PrimaryText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginLeft: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
});

export default PlainListItemPresenter;
