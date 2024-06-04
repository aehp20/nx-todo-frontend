import { Message } from '..';
import { isMessageError } from './isMessageError';
import { MessageError } from './types';

export type ErrorMessageProps = {
  error?: MessageError | string | unknown;
  className?: string;
};

export default function ErrorMessage(props: ErrorMessageProps) {
  const { error, className } = props;

  return (
    <Message type="error" className={className}>
      {error
        ? isMessageError(error)
          ? error.message
          : JSON.stringify(error)
        : 'An error has occurred'}
    </Message>
  );
}
