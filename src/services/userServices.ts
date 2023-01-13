import axios from "axios";
import User from "../interfaces/User";

//@desc returns all users
//@ GET /api/users
export function checkUser(user: User) {
  return axios.get(
    `${process.env.REACT_APP_USERS_API}?email=${user.email}&password=${user.password}`
  );
}

//@desc returns all users
//@ GET /api/users
export function getkUsers(user: User) {
  return axios.get(`${process.env.REACT_APP_USERS_API}`);
}
