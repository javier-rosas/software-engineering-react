import React from "react"
import { useState } from 'react'

const TuitStats = ({tuit, likeTuit}) => {

  const [isLiked, setIsLiked] = useState(false)

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
        <span onClick={() => {
          likeTuit(tuit)
          setIsLiked(!isLiked)
          }}>
        {
          (tuit._stats._likes > 0 || isLiked) ?
          <i className="fas fa-heart"
             style={{color: 'red'}}></i>
        
             :
        
          // (tuit._stats._likes <= 0 ) &&
          <i className="far fa-heart"></i>
        }
        {tuit._stats && tuit._stats._likes}
        </span>
      </div>
    </div>
  );
}
export default TuitStats