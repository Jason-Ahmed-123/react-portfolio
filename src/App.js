import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Project></Project>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
