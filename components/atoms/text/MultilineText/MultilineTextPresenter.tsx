import { ReactNode } from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';

export type Props = {
  children: ReactNode;
  color: string;
  style?: StyleProp<TextStyle>;
};

const MultilineTextPresenter: React.FC<Props> = ({ children, color, style }) => <Text style={[{ color }, style]}>{children}</Text>;

export default MultilineTextPresenter;
