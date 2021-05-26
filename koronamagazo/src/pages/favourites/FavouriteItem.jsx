import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../../components/custom-button/custom-button.component';


import './favourite-item.styles.scss';

const FavouriteItem = (item) => {
    const {name,totalsale, price, imageUrl} = item;
    console.log(item);
    return (
    <div className='favourite-item'>
        <div                                                
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`        
            }}
        />                                                          
        <div className='facourite-footer'>              
            <span className='name'>{name}</span>        
            <span className='price'>{price}</span>
            <span className='price'>Total sales:{totalsale}</span>

        </div>
        <CustomButton  inverted>
            Add to cart 
        </CustomButton>
    </div>
)};


export default FavouriteItem; 