import React, { Component, ErrorInfo } from 'react';
import Button from './Button/Button.tsx';
import { LABELBUTTONS, MESSAGES } from '../config.ts';
import Error from './Error/Error.tsx';

interface ErrorBoundaryState {
  hasError: boolean;
  className: string;
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
          <h2 style={{ color: 'red' }}>{MESSAGES.error}</h2>
          <Button
            className="buttonPrimery"
            onClick={this.handlerError}
            label={LABELBUTTONS.reload}
          />
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
