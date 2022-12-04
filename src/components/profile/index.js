import * as service from "../../services/auth-service"
import { useNavigate } from "react-router-dom"
import {useState, useEffect} from 'react'
import MyLikes from "./my-likes";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({})
  useEffect(async () => {
    try {
      const user = await service.profile()
      setProfile(user);
    } catch (e) {
      navigate('/login');
    }
  }, []);
  const logout = () => {
    service.logout()
      .then(() => navigate('/login'))
  }
  return(
    <div>
      <Link to="/profile/mylikes">
        Likes
      </Link>
      <h4>{profile._username}</h4>
      <h6>@{profile._username}</h6>
      <button onClick={logout}>
        Logout</button>
    </div>
  )
}

export default Profile