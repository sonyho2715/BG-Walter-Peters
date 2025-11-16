'use client';

import React, { Component, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  fallbackMessage?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class VideoErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Video Error Boundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <AlertCircle className="w-16 h-16 text-red-500 dark:text-red-400" />
            <div>
              <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-2">
                {this.props.fallbackTitle || 'Video Failed to Load'}
              </h3>
              <p className="text-red-700 dark:text-red-300 mb-4">
                {this.props.fallbackMessage ||
                  'We encountered an error loading this video. Please try refreshing the page or check your internet connection.'}
              </p>
              {this.state.error && (
                <details className="text-sm text-red-600 dark:text-red-400 mb-4">
                  <summary className="cursor-pointer hover:underline">
                    Technical Details
                  </summary>
                  <pre className="mt-2 text-left bg-red-100 dark:bg-red-900/40 p-3 rounded overflow-auto">
                    {this.state.error.toString()}
                  </pre>
                </details>
              )}
              <button
                onClick={this.handleReset}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
