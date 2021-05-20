import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { updateCollections } from '../../redux/shop/shop.actions';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const FavouritesPage = () => {
    const { items } = favourites;
    return (
        <div className='favourites-page'>
            <h2 className='title'> Favourites </h2>
            <div className='items'>
                {
                  //  items.map(item => (<CollectionItem key={item.id} item={item} />))
                }
            </div>
        </div>
        );
    }

export default FavouritesPage;
