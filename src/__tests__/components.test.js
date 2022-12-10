import { render } from '@testing-library/react';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Cryptos from '../components/Cryptos';
import Crypto from '../components/Crypto';
import Store from '../Redux/configureStore';
import '@testing-library/jest-dom';


describe('Testing Cryptos page', () => {
  it('Should match the snapshot', () => {
    const cryptos = render(
      <StrictMode>
        <Router>
          <Provider store={Store}>
            <Cryptos />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(cryptos).toMatchSnapshot();
  });
});

describe('Testing Crypto', () => {
  it('Should match the snapshot', () => {
    const crypto = render(
      <StrictMode>
        <Router>
          <Provider store={Store}>
            <Crypto />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(crypto).toMatchSnapshot();
  });
});