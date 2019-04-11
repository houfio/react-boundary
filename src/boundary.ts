import { Component, ComponentType, createElement, ErrorInfo } from 'react';

import { context } from './context';
import { State } from './types';

export function boundary<P extends object>(component: ComponentType<P>) {
  return class Boundary extends Component<P, State> {
    public static displayName = `Boundary(${component.displayName || component.name || 'Component'})`;

    public state = {};

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      this.setState({
        error,
        errorInfo
      });
    }

    public render() {
      return createElement(context.Provider, {
        value: this.state,
        children: createElement(component, this.props)
      });
    }
  };
}
