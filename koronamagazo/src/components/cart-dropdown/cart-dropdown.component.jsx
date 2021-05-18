import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors'; 
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (   // an yparxoun proionta sto kala8i emfanise ta
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : ( 
                <span className='empty-message'>Your cart is empty</span> // alliws emfanise auto
            )} 
        </div>
        <CustomButton onClick={() => {
            history.push('./checkout');
            dispatch(toggleCartHidden());  // patontas na pame sto chkeckout-page klinei to cart
            }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems  
});

export default withRouter(connect(mapStateToProps)(CartDropdown));  //me to router pairnw san parametro auto pou mou epistrefei to connect call  