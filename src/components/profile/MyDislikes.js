/**
 * @file implements MyDislikes screen
 */

//imports
import Tuits from "../tuits";
import * as service from "../../services/dislikes-service";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

/**
 * 
 * @returns JSX component
 */
function MyDislikes() {
  // state 
  const [dislikedTuits, setDislikedTuits] = useState([]);
  const user = useSelector((state) => state.userReducer.user)

  /**
   * Finds all the tuits disliked by the user
   * @returns The status of the request
   */
  const findTuitsIDislike = () =>
    service.findAllTuitsDislikedByUser(user._id)
      .then((tuits) => {
        console.log("user", user)
        const actualTuits = tuits.map(tuit => tuit.tuit)
        console.log("MyLikes", actualTuits)
        setDislikedTuits(actualTuits)
      });

  // find tuits liked by user on first refresh 
  useEffect(findTuitsIDislike, []);
    
  return(
    <div>
      <Tuits tuits={dislikedTuits}
              refreshTuits={findTuitsIDislike}/>
    </div>
  )
}

export default MyDislikes