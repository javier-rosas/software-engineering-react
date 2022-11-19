import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import * as service from "../../services/users-service";
import {signup, login} from '../../services/auth-service'
import React from "react";
import {UserList} from "./user-list";

export const Login = () => {
  const [existingUsers, setExistingUsers] = useState([]);
  const [newUser, setNewUser] = useState({});
  const [loginUser, setLoginUser] = useState({});
  const navigate = useNavigate()

  const deleteUser = (uid) =>
    service.deleteUser(uid)
      .then(findAllUsers)

  const findAllUsers = () =>
    service.findAllUsers()
      .then(users => {
        setExistingUsers(users)
      })

  const register = () =>
    signup(newUser)
      .then(() => navigate('/profile'))
      .catch(e => alert(e));

  const loginFunc = () =>
    login(loginUser)
      .then((user) => navigate('/profile/mytuits'))
      .catch(e => alert(e));

  useEffect(findAllUsers, []);

  return (
    <div>
      <h1>Register</h1>
      <input className="mb-2 form-control"
             onChange={(e) =>
               setNewUser({...newUser, _username: e.target.value})}
             placeholder="username"/>
      <input className="mb-2 form-control"
             onChange={(e) =>
               setNewUser({...newUser, _password: e.target.value})}
             placeholder="password" type="password"/>
      <input className="mb-2 form-control"
             onChange={(e) =>
               setNewUser({...newUser, _email: e.target.value})}
             placeholder="email" type="email"/>
      <button onClick={register} className="btn btn-primary mb-5">Register
      </button>

      <h1>Login</h1>
      <input className="mb-2 form-control"
             onChange={(e) =>
               setLoginUser({...loginUser, _username: e.target.value})}
             placeholder="username"/>
      <input className="mb-2 form-control"
             onChange={(e) =>
               setLoginUser({...loginUser, _password: e.target.value})}
             placeholder="password" type="password"/>
      <button onClick={loginFunc} className="btn btn-primary mb-5">Login</button>

      <h1>Login As</h1>

      <UserList users={existingUsers} deleteUser={deleteUser}/>

    </div>
  );
};