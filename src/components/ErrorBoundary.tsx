import { Component, ReactNode } from 'react';
import { Alert } from 'react-bootstrap';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ?
      <Alert variant="danger" dismissible>
        <Alert.Heading>Ooops, something happens...</Alert.Heading>
      </Alert>
      : this.props.children;
  }
}

export default ErrorBoundary;