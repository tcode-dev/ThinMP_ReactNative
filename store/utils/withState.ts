import { Result, toSuccess, toFailure } from '@/type/Result';

type AsyncFunction<T> = () => Promise<T>;

const withState = async <T>(asyncFunction: AsyncFunction<T>, setState: (state: Result<T>) => void): Promise<void> => {
  try {
    const result = await asyncFunction();

    setState(toSuccess(result));
  } catch (_) {
    setState(toFailure());
  }
};

export default withState;
