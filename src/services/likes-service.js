import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const USERS_API = `${BASE_URL}/api/users`;

const api = axios.create({
 withCredentials: true
})

export const userTogglesTuitLikes = (uid, tid) =>
  api.put(`${USERS_API}/${uid}/likes/${tid}`)
    .then(response => response.data)

export const userTogglesTuitUnlikes = (uid, tid) =>
  api.put(`${USERS_API}/${uid}/unlikes/${tid}`)
    .then(response => response.data)

export const findUserLikesTuit = async (uid, tid) => {
  return await api.get(`${USERS_API}/${uid}/likes/${tid}`)
}
  
