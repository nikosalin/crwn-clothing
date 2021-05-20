import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

//import { searchBox } from '../../components/search-box/search-box.compnent';

import './collection.styles.scss';

const CollectionPage = ({collection}) => {
    const { title, items } = collection;
    return (
    <div className='collection-page'>
        <h2 className='title'> { title } </h2>
        <div className='items'>
            {
                items.map(item => (<CollectionItem key={item.id} item={item} />))
            }
        </div>
    </div>
    );
}
// ownProps einai ta props pou pernoume apo to panw component travontas to apo to connect
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state) //xrhsimopoiw state se antithesi me allous selectors gt xriazomai kommati tou state pou vasizetai sto url parameter
});

export default connect(mapStateToProps)(CollectionPage);