import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import GlobalStyles from './components/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyles>
        <App />
    </GlobalStyles>,
);
