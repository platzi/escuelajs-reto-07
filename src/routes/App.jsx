import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Cart from '../containers/Cart';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import Store from '../containers/Store';
import AboutUs from '../containers/AbousUs';
import FAQ from '../containers/FAQ';
import  Contact from '../containers/Contact';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Checkout from '../containers/Checkout';
import Thanks from '../containers/Thanks';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/store" component={Store} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/thanks" component={Thanks} />
        <Route exact path="/checkout" component={Checkout} />
        
        <Route component={NotFound} />
      </Switch>
    </Layout>
    

  </BrowserRouter>
);

export default App;