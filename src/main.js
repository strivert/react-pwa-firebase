import React from 'react';
import ReactDOM from 'react-dom';
import reactTabEventPlugin from 'react-tap-event-plugin';
import App from './components/App';

reactTabEventPlugin();

ReactDOM.render(<App/>, document.getElementById('app'));