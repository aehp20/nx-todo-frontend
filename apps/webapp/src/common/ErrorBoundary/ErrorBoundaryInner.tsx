import { Component, ReactNode } from 'react';

type ErrorBoundaryInnerProps = {
  children: ReactNode;
  handleFallback: (error?: Error) => ReactNode;
  hasError: boolean;
  setHasError: (value: boolean) => void;
};

class ErrorBoundaryInner extends Component<ErrorBoundaryInnerProps> {
  state = {
    hasError: false,
    error: undefined,
  };

  constructor(props: ErrorBoundaryInnerProps) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
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
      return this.props.handleFallback(this.state.error);
    }

    return this.props.children;
  }
}

export default ErrorBoundaryInner;
