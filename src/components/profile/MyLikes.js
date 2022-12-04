import Tuits from "../tuits";
import * as service from "../../services/likes-service";
import {useEffect, useState} from "react";
import { useSelector } from "react-redux"

const MyLikes = () => {
  const [likedTuits, setLikedTuits] = useState([]);
  const user = useSelector((state) => state.userReducer.user)

  const findTuitsILike = () =>
    service.findAllTuitsLikedByUser(user._id)
      .then((tuits) => {
        console.log("user", user)
        const actualTuits = tuits.map(tuit => tuit.tuit)
        console.log("MyLikes", actualTuits)
        setLikedTuits(actualTuits)
      });

  useEffect(findTuitsILike, []);
  
  return(
    <div>
      <Tuits tuits={likedTuits}
             refreshTuits={findTuitsILike}/>
    </div>
  );
};

export default MyLikes;