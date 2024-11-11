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

type Result<T> = LoadingResult | SuccessResult<T> | FailureResult;

const toLoading = (): LoadingResult => ({
  isLoading: true,
  isReady: false,
});

const toSuccess = <T>(value: T): SuccessResult<T> => ({
  isLoading: false,
  isSuccess: true,
  isReady: true,
  value,
});

const toFailure = (): FailureResult => ({
  isLoading: false,
  isSuccess: false,
  isReady: false,
});

export { Result, toLoading, toSuccess, toFailure };
