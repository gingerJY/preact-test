import { Router } from 'preact-router';

import { Header, Footer } from './components';

// Code-splitting is automated for `routes` directory
import Home from './routes/home';
import Profile from './routes/profile';
import NebulaForMac from './routes/nebula-for-mac'
import Mask from './routes/mask';

import './style/index.css';
import './style/reset.css';

export default function App() {
  return (
    <div id="app">
      <Header />
      {/* <main> */}
        <Router>
          <Home path="/" />
          <Profile path="/profile/" user="me" />
          <Profile path="/profile/:user" />
          <NebulaForMac path="/nebula-for-mac"/>
          <Mask path="/mask" />
        </Router>
      {/* </main> */}
      <Footer />
    </div>
  );
}
