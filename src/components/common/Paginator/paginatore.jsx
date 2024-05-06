import React from "react";
import s from "./paginator.module.css";

let Paginator = ({ totalUserCount, pageSize, currentPage, onPageChanged }) => {
  let pageCount = Math.ceil(totalUserCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            key={p}
            className={currentPage === p ? s.selectedPage : ""}
            onClick={() => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
