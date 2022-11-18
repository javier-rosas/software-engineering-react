import React from "react";

<<<<<<< HEAD
const TuitStats = ({tuit, likeTuit = () => {}}) => {
=======
export default class TuitStats extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
>>>>>>> a3
    return (
      <div className="row mt-2">
        <div className="col">
          <i className="far fa-message me-1"></i>
<<<<<<< HEAD
          {tuit.stats && tuit.stats.replies}
        </div>
        <div className="col">
          <i className="far fa-retweet me-1"></i>
          {tuit.stats && tuit.stats.retuits}
        </div>
        <div className="col">
          <span onClick={() => likeTuit(tuit)}>
              {
                tuit.stats && tuit.stats.likes && tuit.stats.likes > 0 &&
                  <i className="fas fa-heart me-1" style={{color: 'red'}}></i>
              }
              {
                tuit.stats && tuit.stats.likes && tuit.stats.likes <= 0 &&
                  <i className="far fa-heart me-1"></i>
              }
            {tuit.stats && tuit.stats.likes}
          </span>
=======
          {this.props.tuit.stats && this.props.tuit.stats.replies}
        </div>
        <div className="col">
          <i className="far fa-retweet me-1"></i>
          {this.props.tuit.stats && this.props.tuit.stats.retuits}
        </div>
        <div className="col">
          <i className="far fa-heart me-1"></i>
          {this.props.tuit.stats && this.props.tuit.stats.likes}
>>>>>>> a3
        </div>
        <div className="col">
          <i className="far fa-inbox-out"></i>
        </div>
      </div>
    );
<<<<<<< HEAD
}
export default TuitStats;
=======
  }
}
>>>>>>> a3
