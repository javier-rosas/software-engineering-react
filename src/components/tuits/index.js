import React from "react";
import './tuits.css';
import Tuit from "./tuit";
import * as likesService from "../../services/likes-service";
import { useSelector } from "react-redux"

function Tuits({tuits = [], deleteTuit}) {
  const user = useSelector((state) => state.userReducer.user?._id)
  const likeTuit = (tuit) =>
    likesService
      .userTogglesTuitLikes(user, tuit._id)
      .catch(e => alert(e))


    return (
    <div>
      <ul className="ttr-tuits list-group">
        {
          tuits.map && tuits.map(tuit => {
            return (
              <Tuit 
              key={tuit._id} 
              likeTuit={likeTuit}
              deleteTuit={deleteTuit} 
              tuit={tuit}/>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Tuits;