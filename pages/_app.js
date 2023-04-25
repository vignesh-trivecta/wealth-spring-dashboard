import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from 'react-redux';
import store from '../store/store';
import { persistor } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {

  useEffect(() => {
      import('bootstrap/dist/js/bootstrap');
    }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
)}
