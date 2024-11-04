import { Text, StyleProp, TextStyle } from 'react-native';
import { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
  style?: StyleProp<TextStyle>
};

const PlainText: React.FC<Props> = ({ style, children }) => {
  return (
    <Text style={style} numberOfLines={1} ellipsizeMode="tail">{children}</Text>
  );
}

export default PlainText;
