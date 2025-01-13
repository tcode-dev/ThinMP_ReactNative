import { ReactNode } from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';

export type Props = {
  children: ReactNode;
  color: string;
  style?: StyleProp<TextStyle>;
};

const PlainTextPresenter: React.FC<Props> = ({ children, color, style }) => (
  <Text style={[{ color }, style]} numberOfLines={1} ellipsizeMode="tail">
    {children}
  </Text>
);

export default PlainTextPresenter;
