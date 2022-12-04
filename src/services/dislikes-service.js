import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const USERS_API = `${BASE_URL}/api/users`;

const api = axios.create({
 withCredentials: true
})

export const userTogglesTuitDislikes = async (uid, tid) => 
  api.put(`${USERS_API}/${uid}/dislikes/${tid}`)
    .then(response => response.data)

  
export const findUserDislikesTuit = async (uid, tid) => {
  return await api.get(`${USERS_API}/${uid}/dislikes/${tid}`)
}