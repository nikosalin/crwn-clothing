import { createSelector } from 'reselect';

//input selector
const selectCart = state => state.cart;   //it takes all the state and returns the cart


// otan pataw to idio proin gia to kalathi den ginetai re-render
export const selectCartItems = createSelector(
    [selectCart],                                   
    (cart) => cart.cartItems
);

// pairnei to state.cart apo thn selectCart kai thn kanei hidden
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

// τραβα με την σειρα τα δεδομενα απο την selectCartItems και υπολογίζει το quantity
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)  
)

//pairnei to apo panw kai upologizei thn timi
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0) 
)