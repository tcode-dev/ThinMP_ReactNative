import { Href, useRouter } from 'expo-router';
import { ReactNode, useCallback } from 'react';
import CustomLinkPresenter from './CustomLinkPresenter';

export type Props = {
  children: ReactNode;
  href: string;
};

const CustomLinkContainer: React.FC<Props> = ({ href, ...props }) => {
  const router = useRouter();

  const onPress = useCallback(() => {
    router.push(href as Href);
  }, [href, router]);

  return <CustomLinkPresenter {...props} onPress={onPress} />;
};

export default CustomLinkContainer;
