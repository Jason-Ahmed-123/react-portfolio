import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {

  return (
    // <Router>
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Project></Project>
        {/* <Switch>
        <Route path="/contact">
            <ContactForm />
          </Route>
          <Route path="/contact" component={ContactForm}/>
        </Switch> */}
        <ContactForm></ContactForm>
      </main>
      <Footer></Footer>
    </div>
    // </Router>
  );
}

export default App;
