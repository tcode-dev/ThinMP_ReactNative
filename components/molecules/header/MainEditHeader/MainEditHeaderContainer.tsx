import { useCallback } from 'react';
import EditHeader from '../EditHeader';

const MainEditHeaderContainer = () => {
  const done = useCallback(() => {
    // Do something
  }, []);

  return <EditHeader done={done}  />;
};

export default MainEditHeaderContainer;
