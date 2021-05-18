import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //using local storage as storage

import userReducer from './user/user.reducer';
import cartReducer from './cart/card.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',    //apo poio shmeio tou reducer bject na ksekina to store(apothikeush)
    storage,
    whitelist: ['cart'] //periexei ta stingnames apo tous reducer pou thelw, ton user ton elegxei h firebase
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
}); 

export default persistReducer(persistConfig, rootReducer);