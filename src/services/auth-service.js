/**
 * @file implements auth service 
 */

/**
 * imports
 */
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL

//auth api 
const AUTH_API = `${BASE_URL}/api/auth`

// add credentials to axios 
const api = axios.create({
   withCredentials: true
});

/**
 * 
 * @param user object 
 * @returns user object created on signup
 */
export const signup = async (user) => 
  api.post(`${AUTH_API}/signup`, user)
    .then(response => response.data);

/**
 * Gets the current profile from the session 
 * @returns the user object, or undefined if there is none
 */
export const profile = () =>
  api.post(`${AUTH_API}/profile`)
    .then(response => response.data);

/**
 * Implements logout functionality 
 * @param user user object  
 * @returns Status of request 
 */
export const logout = (user) =>
  api.post(`${AUTH_API}/logout`, user)
      .then(response => response.data);

/**
 * Implements login functionality
 * @param credentials credentials for login 
 * @returns user object
 */
export const login = (credentials) =>
  api.post(`${AUTH_API}/login`, credentials)
    .then(response => response.data);