// import SHOP_DATA from './shop.data';

import FavouriteActionTypes from './favourite.types';

const INNITIAL_STATE = {
    // collections: SHOP_DATA
    favourites: null
};

const favouriteReducer = (state = INNITIAL_STATE, action) => {
    switch(action.type) {
        case FavouriteActionTypes.GET_FAVOURITES:
            return {
                ...state,
                favourites: action.payload
            };
        default:
            return state;
    }
};

export default favouriteReducer;