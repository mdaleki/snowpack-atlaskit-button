import Button from '@atlaskit/button';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <Button>Hey snowpack</Button>

const root = document.getElementById('content');
ReactDOM.render(<App/>, root);