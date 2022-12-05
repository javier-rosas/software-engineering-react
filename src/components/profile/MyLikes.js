/**
 * @file implements MyLikes screen
 */

//imports
import Tuits from "../tuits";
import * as service from "../../services/likes-service";
import {useEffect, useState} from "react";
import { useSelector } from "react-redux"

/**
 * 
 * @returns JSX component
 */
const MyLikes = () => {
  // state 
  const [likedTuits, setLikedTuits] = useState([]);
  const user = useSelector((state) => state.userReducer.user)

  /**
   * Finds all the tuits liked by the user
   * @returns The status of the request
   */
  const findTuitsILike = () =>
    service.findAllTuitsLikedByUser(user._id)
      .then((tuits) => {
        const actualTuits = tuits.map(tuit => tuit.tuit)
        setLikedTuits(actualTuits)
      });

  // find tuits liked by user on first refresh 
  useEffect(findTuitsILike, []);
  
  return(
    <div>
      <Tuits tuits={likedTuits}
             refreshTuits={findTuitsILike}/>
    </div>
  );
};

export default MyLikes;