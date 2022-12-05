import React from "react"
import { useState, useEffect } from 'react'
import { userTogglesTuitDislikes } from '../../services/dislikes-service'
import { findUserDislikesTuit } from '../../services/dislikes-service'
import { findUserLikesTuit } from '../../services/likes-service'
import { useSelector } from "react-redux"

const TuitStats = ({tuit, likeTuit}) => {

  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [localLikes, setLocalLikes] = useState(tuit?._stats?._likes ?? 0)
  const [localDislikes, setLocalDislikes] = useState(tuit?._stats?._dislikes ?? 0)
  const userId = useSelector((state) => state.userReducer.user?._id)
  const dislikeTuit = (tuit) =>
    userTogglesTuitDislikes(userId, tuit._id)
        .catch(e => console.log(e))

  useEffect( () => {
    findUserLikesTuit(userId, tuit._id)
      .then((doesUserLikeTuit) => {
        if (doesUserLikeTuit.data) setIsLiked(true)
      })
      .catch(e => console.log(e))

    findUserDislikesTuit(userId, tuit._id)
      .then((doesUserDislikeTuit) => {
        if (doesUserDislikeTuit.data) setIsDisliked(true)
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <div className="row">

      <div className="col">
          <i className="far fa-message me-1"></i>
          {tuit._stats && tuit._stats._replies}
        </div>
        <div className="col">
          <i className="far fa-retweet me-1"></i>
          {tuit._stats && tuit._stats._retuits}
        </div>
        <div className="col">
          <i className="far fa-inbox-out"></i>
        </div>

      <div className="col">
          <div style={{
            display: 'flex', 
            justifyContent: 'space-between'
          }}>

            { !isLiked ?  

              <i 
                className="fa-solid fa-thumbs-up" 
                style={{color: 'grey'}}
                onClick={() => {
                  if (isDisliked ) {
                    setLocalDislikes(localDislikes - 1)
                    setIsDisliked(false)
                  }
                  setLocalLikes(localLikes + 1)
                  setIsLiked(true)
                  likeTuit(tuit)
                }}/>
          
                :

              <i 
                className="fa-solid fa-thumbs-up" 
                style={{color: 'red'}}
                onClick={() => {
                  setLocalLikes(localLikes - 1)
                  setIsLiked(false)
                  likeTuit(tuit)
                }}/>
            }

            {localLikes}

          
             {
              !isDisliked ?
              <i 
                className="fa-solid fa-thumbs-down" 
                style={{color: 'grey'}}
                onClick={() => {
                  if ( isLiked ) {
                    setIsLiked(false)
                    setLocalLikes(localLikes - 1)
                  }
                  dislikeTuit(tuit)
                  setIsDisliked(true)
                  setLocalDislikes(localDislikes + 1)
                  }}/>
              :
              <i 
                className="fa-solid fa-thumbs-down" 
                style={{color: 'red'}}
                onClick={() => {
                  dislikeTuit(tuit)
                  setLocalDislikes(localDislikes - 1)
                  setIsDisliked(false)
                  }}/>
             }

            {localDislikes}

          </div>
      </div>
    </div>
  );
}
export default TuitStats