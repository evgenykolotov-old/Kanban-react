import React from 'react';

class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      stack: null,
      message: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      stack: error.stack,
      message: error.message
    };
  }

  componentDidCatch(error, errorInfo) {
    // logger(error);
  }

  reloadPage() {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Произошла ошибка</h1>
          <button onClick={this.reloadPage}>Перезагрузить страницу</button>
        </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
