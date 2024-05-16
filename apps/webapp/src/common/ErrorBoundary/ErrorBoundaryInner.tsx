import { Component, ReactNode } from 'react';

type Error = {
  stack?: string;
};

type ErrorBoundaryInnerProps = {
  children: ReactNode;
  fallback: ReactNode;
  hasError: boolean;
  setHasError: (value: boolean) => void;
};

class ErrorBoundaryInner extends Component<ErrorBoundaryInnerProps> {
  state = {
    hasError: false,
  };

  constructor(props: ErrorBoundaryInnerProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  componentDidUpdate(prevProps: { hasError: boolean }) {
    if (!this.props.hasError && prevProps.hasError) {
      this.setState({ hasError: false });
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.props.setHasError(true);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundaryInner;
