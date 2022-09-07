import React from 'react';
import './App.css';

import {Chat, Feature, Footer, Navbar} from './components';
import { Blog, Conditions, Header, Testimonials } from './containers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Conditions />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;