import { MessageError } from './types';

export function isMessageError(
  error: MessageError | string,
): error is MessageError {
  return (error as MessageError).message !== undefined;
}
