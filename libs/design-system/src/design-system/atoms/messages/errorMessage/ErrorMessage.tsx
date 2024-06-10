import { useMemo } from 'react';

import { Message } from '..';
import { isMessageError } from './isMessageError';
import { MessageError } from './types';

import '../../../../styles.css';

export type ErrorMessageProps = {
  error?: MessageError | string;
  className?: string;
};

export default function ErrorMessage(props: Readonly<ErrorMessageProps>) {
  const { error, className } = props;

  const errorMessage = useMemo(
    () => (isMessageError(error) ? error.message : JSON.stringify(error)),
    [error],
  );

  return (
    <Message type="error" className={className}>
      {error ? errorMessage : 'An error has occurred'}
    </Message>
  );
}
