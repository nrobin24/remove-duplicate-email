import React from 'react';
import App from './App';
import tree from './tree';
import {root} from 'baobab-react/higher-order';

var ComposedComponent = root(App, tree);

React.render(<ComposedComponent />, document.getElementById('root'));
