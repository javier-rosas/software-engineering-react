/**
 * @file implements MyTuits
 */

import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import * as service from "../../services/tuits-service";
import * as authService from "../../services/auth-service";
import { useSelector } from "react-redux"
import Tuits from "../tuits";

const MyTuits = ({}) => {

  // state 
  const [tuits, setTuits] = useState([]);
  const user = useSelector((state) => state.userReducer.user)

  /**
   * Find all tuits by user id and sets them in state
   */
  const findMyTuits = () => {
    if (user) {
      service.findTuitByUser(user._id)
      .then(tuits => setTuits(tuits));
    }
  }
  
  /**
   * 
   * @param {string} tid tuit id 
   * @returns status of the request 
   */
  const deleteTuit = (tid) =>
    service.deleteTuit(tid)
      .then(findMyTuits);

  // find tuits on first render
  useEffect(() => {
    findMyTuits()
  }, [])

  return(
    <Tuits tuits={tuits}
           deleteTuit={deleteTuit}/>
  );
};

export default MyTuits;