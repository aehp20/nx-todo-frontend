import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ErrorBoundaryInner from './ErrorBoundaryInner';
import ErrorBoundaryUI from './ErrorBoundaryUI';

type ErrorBoundaryProps = {
  children: ReactNode;
};

export default function ErrorBoundary(props: ErrorBoundaryProps) {
  const { children } = props;

  const [hasError, setHasError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (hasError) {
      setHasError(false);
    }
  }, [location.key]);

  return (
    <ErrorBoundaryInner
      hasError={hasError}
      setHasError={setHasError}
      fallback={<ErrorBoundaryUI />}
    >
      {children}
    </ErrorBoundaryInner>
  );
}
