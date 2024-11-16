import { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export type Props = {
  children: ReactNode;
} & Pick<TouchableOpacityProps, 'onPress'>;

const CustomLinkPresenter: React.FC<Props> = ({ children, onPress }) => {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

export default CustomLinkPresenter;
