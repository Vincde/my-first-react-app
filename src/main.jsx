import React from 'react';
import ReactDOM from 'react-dom/client';

import { App, CustomInput } from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <CustomInput></CustomInput>
      <CustomInput></CustomInput>
    </App>
  </React.StrictMode>,
);

