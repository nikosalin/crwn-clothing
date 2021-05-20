import React from 'react';

import {ReactComponent as Logo} from '../../assets/crown.svg.svg';

import {connect} from 'react-redux';

import { createStructuredSelector } from 'reselect';

import {auth} from '../../firebase/firebase.utils'; 

import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';


import {HeaderContainer, LogoContainer, OptionLink, OptionsContainer} from './header.styles';
//import './header.styles.scss';

//import CollectionItem from '../collection-item/collection-item.component';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/favourites'>
                RECOMENDED
            </OptionLink>
            { currentUser ? (
             <OptionLink as='div' onClick={() => auth.signOut()}>
                SIGN OUT
             </OptionLink>
            ) : (
            <OptionLink to='/signin'>
                SIGN IN
            </OptionLink>
            )} 
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({ //createStructuredSelector gia na mhn xrhsimopoiw to state
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);