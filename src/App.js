import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Images from './components/views/Images/Images';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Images/>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export { App }
