export type Result<T> = LoadingResult | SuccessResult<T> | FailureResult;

interface LoadingResult {
  isLoading: true;
  isReady: false;
}

interface SuccessResult<T> {
  isLoading: false;
  value: T;
  isSuccess: true;
  isReady: true;
}

interface FailureResult {
  isLoading: false;
  isSuccess: false;
  isReady: false;
}
