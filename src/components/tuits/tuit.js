import React from "react";
import TuitStats from "./tuit-stats";
import TuitImage from "./tuit-image";
import TuitVideo from "./tuit-video";
<<<<<<< HEAD
<<<<<<< HEAD
import {useNavigate, Link} from "react-router-dom";

const Tuit = ({tuit, likeTuit}) => {
    const daysOld = (tuit) => {
        const now = new Date();
        const nowMillis = now.getTime();
        const posted = new Date(tuit.postedOn);
        const postedMillis = posted.getTime();
        const oldMillis = nowMillis - postedMillis;
        let old = 0.0;
        const secondsOld = oldMillis/1000.0;
        const minutesOld = secondsOld/60.0;
        const hoursOld = minutesOld/60.0;
        const daysOld = hoursOld/24.0;
        if(daysOld > 1) {
            old = Math.round(daysOld) + 'd';
        } else if(hoursOld > 1) {
            old = Math.round(hoursOld) + 'h';
        } else if(minutesOld > 1) {
            old = Math.round(minutesOld) + 'm';
        } else if(secondsOld > 1) {
            old = Math.round(secondsOld) + 's';
        }
        return old;
    }
  return(
    // <li onClick={() => navigate(`/tuit/${tuit._id}`)}
    <li className="p-2 ttr-tuit list-group-item d-flex rounded-0">
      <div className="pe-2">
        {
          tuit.postedBy &&
          <img src={`../images/${tuit.postedBy.username}.jpg`}
=======
=======
>>>>>>> a3

const Tuit = ({tuit, deleteTuit}) => {

  return(
    <li className="p-2 ttr-tuit list-group-item d-flex rounded-0">
      <div className="pe-2">
        {
          tuit._postedBy &&
          <img src={`../images/${tuit._postedBy?._username}.jpg`}
<<<<<<< HEAD
>>>>>>> a3
=======
>>>>>>> a3
               className="ttr-tuit-avatar-logo rounded-circle"/>
        }
      </div>
      <div className="w-100">
<<<<<<< HEAD
<<<<<<< HEAD
        <h2
          className="fs-5">
          {tuit.postedBy && tuit.postedBy.username}
          @{tuit.postedBy && tuit.postedBy.username} -
            <span className="ms-1">{daysOld(tuit)}</span></h2>
        {tuit.tuit}
        {
          tuit.youtube &&
            <TuitVideo tuit={tuit}/>
        }
        {
          tuit.image &&
          <TuitImage tuit={tuit}/>
        }
        <TuitStats tuit={tuit} likeTuit={likeTuit}/>
=======
=======
>>>>>>> a3
          <i onClick={() => deleteTuit(tuit._id)} className="fas fa-remove fa-2x fa-pull-right"></i>
        <h2
          className="fs-5">
          {tuit._postedBy && tuit._postedBy?._username}
          @{tuit._postedBy && tuit._postedBy?._username} -
          {tuit._published}</h2>
        {tuit._tuit}
        {
          tuit._youtube &&
            <TuitVideo tuit={tuit}/>
        }
        {
          tuit._image &&
          <TuitImage tuit={tuit}/>
        }
        <TuitStats tuit={tuit}/>
<<<<<<< HEAD
>>>>>>> a3
=======
>>>>>>> a3
      </div>
    </li>
  );
}
export default Tuit;