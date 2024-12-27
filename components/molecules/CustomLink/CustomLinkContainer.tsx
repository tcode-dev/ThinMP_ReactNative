import { ReactNode, useCallback } from 'react';
import { Href, useRouter } from 'expo-router';
import CustomLinkPresenter from './CustomLinkPresenter';

export type Props = {
  children: ReactNode;
  href: string;
};

const CustomLinkContainer: React.FC<Props> = ({ href, ...props }) => {
  const router = useRouter();

  const onPress = useCallback(() => {
    router.push(href as Href);
  }, []);

  return <CustomLinkPresenter {...props} onPress={onPress} />;
};

export default CustomLinkContainer;
