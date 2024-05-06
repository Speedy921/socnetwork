import React from "react";
import Paginator from "../common/Paginator/paginatore";
import User from "./User";

let Users = ({
  currentPage,
  totalUserCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUserCount={totalUserCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
            key={u.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
