import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFavs} from '../../redux/favourites/favourite.action';
import {getItems} from "../../firebase/firebase.utils"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import firebase from "../../firebase/firebase.utils"


function useLists() {
    const [lists, setLists] = useState([])
    useEffect(() => {
        firebase.firestore().collection("favourites").doc('yQ0DSFvUuJYbN8EZuBjp').get().then((doc) => {
  
            var favourite = doc.data();
        
            let top5 = [];
            const top = favourite.items.sort(function(a, b) {
              return a.totalsale - b.totalsale;
          });
        
            for(let i=0; i<=4; i++) {
             top5[i] = top[top.length - i -1]
            }
            setLists(top5);
          }).catch((error) => {
            console.log("Error getting document:", error);
          })
    }, [])
    return lists
  }
  const FavouritesPage = () => {
    const lists = useLists()
    const handleOnDelete = id => {
      firebase
        .firestore()
        .collection("notes")
        .doc(id)
        .delete()
    }
    return (
      <div>
        {JSON.stringify(lists)}
      </div>
    )
  }
  export default FavouritesPage;