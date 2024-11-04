export type Result<Data> = LoadingResult | SuccessResult<Data> | FailureResult;

interface LoadingResult {
    isLoading: true;
}

interface SuccessResult<Data> {
    isLoading: false;
    data: Data;
    isSuccess: true;
}

interface FailureResult {
    isLoading: false;
    isSuccess: false;
}
