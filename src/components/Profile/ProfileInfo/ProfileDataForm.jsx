import React from "react";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormControls/FormsControls";
import s from "./ProfileInfo.module.css";
import { reduxForm } from "redux-form";
import style from "../../../components/common/FormControls/FormsControls.module.css";

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      {error && <div className={style.formSummaryError}>{error}</div>}

      <div>
        <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>:
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>

      <div>
        <b>My professional skills</b>:
        {createField(
          "My Professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>

      <div>
        <b>About me</b>:{createField("About me", "AboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contact}>
              <b>
                {key}: {createField(key, "contacts." + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
