interface LoadingResult {
  isLoading: true;
  isReady: false;
}

interface SuccessResult<T> {
  isLoading: false;
  isReady: true;
  isSuccess: true;
  value: T;
}

interface FailureResult {
  isLoading: false;
  isReady: false;
  isSuccess: false;
}

type Result<T> = LoadingResult | SuccessResult<T> | FailureResult;

const toLoading = (): LoadingResult => ({
  isLoading: true,
  isReady: false,
});

const toSuccess = <T>(value: T): SuccessResult<T> => ({
  isLoading: false,
  isReady: true,
  isSuccess: true,
  value,
});

const toFailure = (): FailureResult => ({
  isLoading: false,
  isReady: false,
  isSuccess: false,
});

export { Result, toLoading, toSuccess, toFailure };
