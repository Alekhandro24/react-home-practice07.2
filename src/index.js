import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App2 } from 'components2/App2';
import { store } from 'components2/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-home-practice07.2">
      <Provider store={store}>
        <App2 />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
