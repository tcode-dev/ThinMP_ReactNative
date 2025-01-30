import { useNavigation } from 'expo-router';
import ModalPresenter, { Props } from './ModalPresenter';

const ModalContainer: React.FC<Pick<Props, 'children'>> = ({children}) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.goBack();
  };

  return <ModalPresenter onPress={onPress}>{children}</ModalPresenter>;
};

export default ModalContainer;