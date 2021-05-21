import FavouriteActionTypes from './favourite.types';

export const getFavs = (favs) => ({
    type: FavouriteActionTypes.GET_FAVOURITES,
    payload: favs
});