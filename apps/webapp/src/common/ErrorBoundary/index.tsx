import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ErrorBoundaryInner from './ErrorBoundaryInner';
import ErrorBoundaryUI from './ErrorBoundaryUI';

type ErrorBoundaryProps = {
  children: ReactNode;
};

export default function ErrorBoundary(props: Readonly<ErrorBoundaryProps>) {
  const { children } = props;

  const [hasError, setHasError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (hasError) {
      setHasError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  const handleFallback = (error?: Error) => <ErrorBoundaryUI error={error} />;

  return (
    <ErrorBoundaryInner
      hasError={hasError}
      setHasError={setHasError}
      handleFallback={handleFallback}
    >
      {children}
    </ErrorBoundaryInner>
  );
}
