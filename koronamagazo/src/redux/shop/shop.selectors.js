import { createSelector } from 'reselect';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

//metatrepoume to object se array apo to shop.data
export const selectCollectionsForPreviw = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

// an to id pou mou epistrefei to collection einai idio me to id toy collectionUrlParam
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
);