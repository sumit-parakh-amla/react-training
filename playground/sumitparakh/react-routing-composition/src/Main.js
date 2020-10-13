import React from 'react';
import './App.css';
import { Header } from './Header';
import { Home } from './Home';
import { Footer } from './Footer/Footer';
import { About } from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';
import { BlogPost } from './BlogPost';

/**
 * <> ==> React Fragment
 */
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/blog/:slug">
              <BlogPost></BlogPost>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
