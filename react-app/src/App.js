import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import Navigation from './components/Navigation';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import Home from './components/Home';
import Services from './components/Services';
import PreForm from './components/PreForm';
import OrderForm from './components/OrderForm';
import MyOrders from './components/MyOrders';
import ReviewForm from './components/ReviewForm';
import MyProfile from './components/MyProfile';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path='/' exact={true}>
          <Home />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/tasker-enrollment' exact={true}>

        </Route>
        <Route path='/services' exact={true}>
          <Services />
        </Route>
        <ProtectedRoute path='/dashboard' exact={true}>

        </ProtectedRoute>
        <ProtectedRoute path='/user/orders' exact={true}>
          <MyOrders />
        </ProtectedRoute>
        <ProtectedRoute path='/user/profile' exact={true} >
          <MyProfile />
        </ProtectedRoute>
        <ProtectedRoute path='/booking'>
          <PreForm />
        </ProtectedRoute>
        <ProtectedRoute path='/form' >
          <OrderForm />
        </ProtectedRoute>
        <ProtectedRoute path='/review'>
          <ReviewForm />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
