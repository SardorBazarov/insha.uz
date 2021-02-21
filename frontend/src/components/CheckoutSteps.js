import React from 'react';
import { Link } from 'react-router-dom';

export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? 'active' : ''}><Link className="checkout-steps" to="/signin">Ro`yxatdan o`tish</Link></div>
      <div className={props.step1 ? 'active' : ''}><Link className="checkout-steps" to="/cart">Savat</Link></div>
      <div className={props.step2 ? 'active' : ''}><Link className="checkout-steps" to="/shipping">Yetkazib berish</Link></div>
      <div className={props.step3 ? 'active' : ''}><Link className="checkout-steps" to="/payment">To`lov</Link></div>
      <div className={props.step4 ? 'active' : ''}><Link className="checkout-steps" to="/placeorder">Buyurtmani joylashtirish</Link></div>
    </div>
  );
}
