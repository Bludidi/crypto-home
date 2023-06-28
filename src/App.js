import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Helmet } from 'react-helmet';
import Cryptos from './components/Cryptos';
import Crypto from './components/Crypto';
import NavBar from './components/NavBar';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <>
            <Helmet>
              <title>Crypto Home</title>
              <meta name="description" content="Crypto Home is a web app that shows top 10 crypto currencies ordered by their value" />
              <meta property="og:title" content="Crypto Home" />
              <meta
                property="og:description"
                content="Crypto Home is a web app that shows top 10 crypto currencies ordered by their value"
              />
              <meta property="og:image" content="./src/assets/crypto_home.png" />
              <meta property="og:url" content="https://hilarious-pasca-2d43e9.netlify.app/" />
            </Helmet>
            <NavBar />
            <Cryptos />
          </>
        )}
      />
      <Route
        path="/crypto-details"
        element={(
          <>
            <DetailsPage />
            <Crypto />
          </>
        )}
      />
    </Routes>
  );
}

export default App;
