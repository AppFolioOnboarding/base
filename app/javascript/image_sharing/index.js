import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('feedback-root')
);

if (module.hot) {
  module.hot.accept();
}
