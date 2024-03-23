import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <img
              src={u.photos.small != null ? u.photos.small : userPhoto}
              className={s.userPhoto}
            />
          </span>
          <span>
            {u.followed ? (
              <button
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                follow
              </button>
            )}
          </span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.city"}</div>
            <div>{"u.country"}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
