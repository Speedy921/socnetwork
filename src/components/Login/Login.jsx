import React from "react";
import { reduxForm } from "redux-form";
import { Input, createField } from "../common/FormControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/auth-reducer";
import style from "../common/FormControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, {
        type: "password",
      })}
      {createField(
        null,
        "rememberMe",
        [required],
        Input,
        { type: "checkbox" },
        "rememberMe"
      )}
      {captchaUrl && <img src={captchaUrl} alt="" />}
      {captchaUrl &&
        createField("Symbols from image", "captcha", [required], Input)}
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
