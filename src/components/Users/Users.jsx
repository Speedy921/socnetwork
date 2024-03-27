import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

let Users = (props) => {
  let pageCount = Math.ceil(props.totalUserCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p && s.selectedPage}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
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
