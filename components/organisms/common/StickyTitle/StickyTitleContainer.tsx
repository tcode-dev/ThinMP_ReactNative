import { ReactNode, useEffect, useState } from 'react';
import { Animated } from 'react-native';

export type Props = {
  children: ReactNode;
  scrollY: Animated.Value;
  endPoint: number;
};

const StickyTitleContainer: React.FC<Props> = ({ children, scrollY, endPoint }) => {
  const [state, setState] = useState(true);

  useEffect(() => {
    const unsubscribe = scrollY.addListener(({ value }) => {
      setState(value <= endPoint);
    });

    return () => {
      scrollY.removeListener(unsubscribe);
    };
  }, []);

  if (state) return children;

  return null;
};

export default StickyTitleContainer;
