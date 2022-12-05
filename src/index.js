import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

//redux
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './views/client/redux/store';

import GlobalStyle from './views/client/common/globalStyle/GlobalStyle';
import ScrollToTop from './views/client/hook/ScrollToTop';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <GlobalStyle>
        <ScrollToTop></ScrollToTop>
        <App />
      </GlobalStyle>
    </Router>
  </Provider>
);
