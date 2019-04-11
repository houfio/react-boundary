import { ErrorInfo } from 'react';

export type State = {
  error?: Error,
  errorInfo?: ErrorInfo
};

export type Hook = [Error | undefined, ErrorInfo | undefined];
