import React from "react";
const TuitVideo = ({tuit}) => {
  return(
    <div
      className="ttr-responsive-video ttr-rounded-15px position-relative overflow-hidden w-100 mt-2">
      <iframe width="560"
<<<<<<< HEAD
<<<<<<< HEAD
              height="315" src={tuit.youtube}
=======
              height="315" src={tuit._youtube}
>>>>>>> a3
=======
              height="315" src={tuit._youtube}
>>>>>>> a3
              title="YouTube video player"
              frameBorder="0"
              className="position-absolute top-0 w-100 h-100"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
    </div>
  )
};
export default TuitVideo;