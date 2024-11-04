export type Result<T> = LoadingResult | SuccessResult<T> | FailureResult;

interface LoadingResult {
  isLoading: true;
}

interface SuccessResult<T> {
  isLoading: false;
  value: T;
  isSuccess: true;
}

interface FailureResult {
  isLoading: false;
  isSuccess: false;
}
