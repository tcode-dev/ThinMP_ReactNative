import { Result, toSuccess, toFailure } from '@/type/Result';

type SyncFunction<T> = () => T;
type AsyncFunction<T> = () => Promise<T>;

export const withStateAsync = async <T>(asyncFunction: AsyncFunction<T>, setState: (state: Result<T>) => void): Promise<void> => {
  try {
    const result = await asyncFunction();

    setState(toSuccess(result));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    setState(toFailure());
  }
};
export const withStateSync = <T>(syncFunction: SyncFunction<T>, setState: (state: Result<T>) => void): void => {
  try {
    const result = syncFunction();

    setState(toSuccess(result));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    setState(toFailure());
  }
};
