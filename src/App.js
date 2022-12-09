import React from 'react';
import './App.css';

import {Footer, Navbar} from './components';
import { Conditions, Header} from './pages';

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


/**
 * todo master grid layout 
 * todo sign up and login forms - form validation 
 * todo blog section view - this is transferrable to other projects such as portfolio website 
 * todo do a mockup of how the feature should be
 */
