import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {Link, useHistory} from 'react-router-dom';

const promise=loadStripe('pk_test_51IdXvxFCNhSEg9e7En5juDNgfbJ82xGtxSOKJRwyVuJnN3u0Ut7hjqreUhnCFilAmCtxgnFtjGIkI6BPJHP8Cjry00ie4etUC6');

function App() {
const [{}, dispatch]= useStateValue(); 

useEffect(() => {
  // will only run once when the app component loads...

  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // the user just logged in / the user was logged in

      dispatch({
        type: "SET_USER",
        user: authUser,
      });  
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
}, []);

  return (
    <Router>
    <div className="App">
        <Switch>
        <Route path="/login">
         <Login />
            </Route>
            <Route path="/checkout">
            <Header />
            <Checkout />
            </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
            <Route path="/">
            <Header />
          <Home />
          </Route>
       </Switch>

      </div>
    </Router>
  );
}

export default App;
