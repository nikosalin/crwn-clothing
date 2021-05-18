import {createSelector} from 'reselect';

const selectUser = state => state.user;  // pairnei apo to state mono ton user

export const selectCurrentUser = createSelector(
    [selectUser], //prwth parametros o user pou pairnei apo to state
    (user) => user.currentUser
);

