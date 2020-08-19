import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Identification from '../components/common/Identification';
import PaymentSuccess from '../components/common/PaymentSuccess';
import PopUpLogin from '../components/common/PopUpLogin';
import { CartProvider } from '../providers/CartProvider';
import { AuthProvider } from '../providers/AuthProvider';
import Address from '../components/common/Address';
import Payment from '../components/common/Payment';
import PrivateRoute from './PrivateRoute';
import Cart from '../pages/Cart';
import Home from "../pages/Home";

const Routes = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Route component={ Home } path="/" exact />
          <Route component={ Cart } path="/cart" exact />
          <Route component={ PopUpLogin } path="/login" exact />
          <Route component={ PaymentSuccess } path="/success" exact />

          <Switch>
            <Route component={ Identification } path="/checkout" exact />
            <PrivateRoute component={ Address } path="/checkout/address" exact />
            <PrivateRoute component={ Payment } path="/checkout/payment" exact />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
};

export default Routes;