import React from 'react';
import './App.css';

import {Footer, Navbar} from './components';
import { Conditions, Header} from './containers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Conditions />
      <Footer />
    </div>
  );
}

export default App;