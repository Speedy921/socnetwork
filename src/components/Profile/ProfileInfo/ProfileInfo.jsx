import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://images.assetsdelivery.com/compings_v2/bubertart/bubertart2302/bubertart230200398.jpg"></img>
      </div>
      <div className={s.descriptionBloack}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
