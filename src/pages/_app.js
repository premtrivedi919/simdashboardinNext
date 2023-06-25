// pages/_app.js

import { Provider } from 'react-redux';
import store from '../store/store';
import '../../public/styles.css';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
