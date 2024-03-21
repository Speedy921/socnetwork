import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <img src={u.photoUrl} className={s.userPhoto} />
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
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.city}</div>
            <div>{u.country}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
