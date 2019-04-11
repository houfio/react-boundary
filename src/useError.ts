import { useContext } from 'react';

import { context } from './context';
import { Hook } from './types';

export function useError(): Hook {
  const { error, errorInfo } = useContext(context);

  return [error, errorInfo];
}
