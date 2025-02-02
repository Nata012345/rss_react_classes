import React, { Component, ErrorInfo } from 'react';
import Button from './Button/Button.tsx';
import { LABELBUTTONS } from '../config.ts';
import Error from './Error/Error.tsx';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handlerError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h2>Something went wrong. Please reload the page.</h2>
          <Button onClick={this.handlerError} label={LABELBUTTONS.reload} />
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
