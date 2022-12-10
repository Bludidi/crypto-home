import { Route, Routes } from 'react-router-dom';
import './App.css';
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
