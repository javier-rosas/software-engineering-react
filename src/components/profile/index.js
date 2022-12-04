import * as service from "../../services/auth-service"
import { useNavigate } from "react-router-dom"
import {useState, useEffect} from 'react'
import MyLikes from "./MyLikes";
import { Link } from "react-router-dom";
import { signin } from "../../redux/userSlice"
import { useSelector, useDispatch } from 'react-redux'

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({})
  const user = useSelector((state) => state.userReducer.user)
  const dispatch = useDispatch()

  useEffect(async () => {
    try {
      const userAuth = await service.profile()
      setProfile(user);
      dispatch( signin(user) )
    } catch (e) {
      navigate('/login');
    }
  }, []);
  const logout = () => {
    service.logout()
      .then(() => navigate('/login'))
      dispatch( signin({}) )
  }
  return(
    <div>
      <Link to="/profile/mylikes">
        Likes
      </Link>
      <br/>
      <Link to="/profile/mytuits">
        My Tuits
      </Link>
      <h4>{profile._username}</h4>
      <h6>@{profile._username}</h6>
      <button onClick={logout}>
        Logout</button>
    </div>
  )
}

export default Profile