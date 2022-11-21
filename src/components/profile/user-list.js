import React from "react";
import {Link} from "react-router-dom";
import {login} from '../../services/auth-service'

export const UserList = ({users, deleteUser}) => {
  return (
    <div className="list-group">
      {
        
        users.map(user => {
          return (
            <Link className="list-group-item"
                  key={user._id}
                  to={`/home/${user._id}`}
                  onClick={() => login(user)}>
          <span className="fs-3">
            {user._username}
          </span>
              <button onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                deleteUser(user._id)
              }} className="btn btn-danger fa-pull-right">
                <i className="fas fa-remove"></i>
              </button>
            </Link>
          )
        })
      }
    </div>)
};
