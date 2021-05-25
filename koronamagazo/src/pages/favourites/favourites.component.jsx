import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFavs} from '../../redux/favourites/favourite.action';
import {getItems} from "../../firebase/firebase.utils"

class FavouritesPage extends React.Component {
    state = {
        loading: true
    };
    // const { items } = favourites;
    async componentDidMount() {
        const {getFavs} = this.props;
        const favs = await getItems();

        const newFav = await getFavs(favs);
        // userRef.onSnapshot(snapShot => {
        //   setCurrentUser({
        //       id: snapShot.id,
        //       ...snapShot.data()
        //     });
        // });        // console.log("ref",favs);
        // const {getItems} = this.props;
    }

    render() {
        
        //  console.log("favs",getItems);
        return (
        <div className='favourites-page'>
            <h2 className='title'> FAVOURITES </h2>
            <div className='items'>
                {
                  //  items.map(item => (<CollectionItem key={item.id} item={item} />))
                }
            </div>
        </div>
        );}
    }

const mapDispatchToProps = dispatch => ({
    getFavs: favs => dispatch(getFavs(favs))});

export default connect(null, mapDispatchToProps)(FavouritesPage);