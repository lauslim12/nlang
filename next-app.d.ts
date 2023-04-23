declare global {
  interface BaseResponse {
    statusCode: number;
    message: string;
  }

  // For successful API request.
  interface SuccessResponse extends BaseResponse {
    status: 'success';
    data: {
      translated: string[];
      tokens: string[][];
    };
  }

  // A client-side error.
  interface ErrorResponse extends BaseResponse {
    status: 'error';
    error: unknown;
  }

  // A server-side error.
  interface FailureResponse extends BaseResponse {
    status: 'failure';
    error?: ReturnType<typeof nlang.parseAndGetSyntaxErrors>;
  }

  // Idle state.
  interface IdleResponse extends BaseResponse {
    status: 'idle';
  }

  type APIResponse =
    | SuccessResponse
    | ErrorResponse
    | FailureResponse
    | IdleResponse;
}

export {};
