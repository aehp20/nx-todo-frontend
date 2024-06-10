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

  if (error) {
    const errorMessage = isMessageError(error)
      ? error.message
      : JSON.stringify(error);

    return (
      <Message type="error" className={className}>
        {errorMessage}
      </Message>
    );
  }

  return (
    <Message type="error" className={className}>
      An error has occurred
    </Message>
  );
}
