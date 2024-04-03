import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "b5d27415-20f2-49fc-bebc-0dbcfc362b77",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(`?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};