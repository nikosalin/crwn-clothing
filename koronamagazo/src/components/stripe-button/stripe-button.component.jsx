import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;  //px timi 25..25 * 100 gia na ginoun sents
    const publishableKey = 'pk_test_51Ij4bRGPm29AFXoj5PUwGrIdY4rJKVjrJn0CAKP0U7JaIwDjYJA2mpvmhZbyKr46mCGLxx8F8d9Noar3XjdfbSN400nHxBEGQX';

    //kanonika pername sto back to token gia na kanei thn xrewsh alla pros to parwn den to kanw
    const onToken = token => {
        console.log(token);
        alert('Payment succesful');
    }


    return (
        <StripeCheckout 
            label='Pay Now'
            name='Korono-Rouxa'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`} //price kai oxi priceForStripe gt thelw na fainetai posa dollaria kanei oxi posa sents
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;