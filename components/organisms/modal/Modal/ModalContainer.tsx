import { useNavigation } from 'expo-router';
import { useCallback } from 'react';
import ModalPresenter, { Props } from './ModalPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';

const ModalContainer: React.FC<Pick<Props, 'children'>> = ({children}) => {
  const color = useThemeColor();
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return <ModalPresenter overlayColor={color.overlay} modalColor={color.onBackground} onPress={onPress}>{children}</ModalPresenter>;
};

export default ModalContainer;