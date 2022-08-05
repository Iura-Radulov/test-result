import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import './fonts/Golos-Text/Golos-Text_Bold.ttf';
import './fonts/Golos-Text/Golos-Text_DemiBold.ttf';
import './fonts/Golos-Text/Golos-Text_Medium.ttf';
import './fonts/Golos-Text/Golos-Text_Regular.ttf';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
