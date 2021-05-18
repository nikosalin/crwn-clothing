import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'; 

import './checkout.styles.scss';

const CheckoutPgae = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='heade-block'>
                <span>Product</span>
            </div>
            <div className='heade-block'>
                <span>Description</span>
            </div>
            <div className='heade-block'>
                <span>Quantity</span>
            </div>
            <div className='heade-block'>
                <span>Price</span>
            </div>
            <div className='heade-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>
            <span>TOTAL: ${total}</span>    
        </div> 
        <div className='test-warning'>
            *Please use the test credit card for test paymets*
            <br />
            4242 4242 4242 4242 - 01/21 - 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPgae);