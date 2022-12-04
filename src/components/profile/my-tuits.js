import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import * as service from "../../services/tuits-service";
import * as authService from "../../services/auth-service";
import { useSelector } from "react-redux"
import Tuits from "../tuits";

const MyTuits = ({}) => {

  const [tuits, setTuits] = useState([]);
  const user = useSelector((state) => state.userReducer.user)

  const findMyTuits = () => {
    if (user) {
      service.findTuitByUser(user._id)
      .then(tuits => setTuits(tuits));
    }
  }
  
  const deleteTuit = (tid) =>
    service.deleteTuit(tid)
      .then(findMyTuits);

  useEffect(() => {
    findMyTuits()
  }, [])

  return(
    <Tuits tuits={tuits}
           deleteTuit={deleteTuit}/>
  );
};

export default MyTuits;