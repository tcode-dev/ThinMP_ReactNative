import { router } from 'expo-router';
import { useCallback } from 'react';
import EditHeaderPresenter, { Props as EditHeaderPresenterProps } from './EditHeaderPresenter';

type Props = Pick<EditHeaderPresenterProps, 'opacity' | 'done'>;

const EditHeaderContainer: React.FC<Props> = (props) => {
  const done = useCallback(() => {
    props.done();
    router.back();
  }, [props]);
  const cancel = useCallback(() => {
    router.back();
  }, []);

  return <EditHeaderPresenter opacity={props.opacity} done={done} cancel={cancel} />;
};

export default EditHeaderContainer;
