import React, { useState } from "react";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import { Link } from "react-router-dom";
import FBlogo from "../../images/fb-logo.png";

//Media query
const customMedia = generateMedia({
  tablet: "640px",
});

const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  z-index: 5;
  ${customMedia.lessThan("tablet")`
    border-bottom: 1px solid #999;
    `}

  .form-container {
    background: rgba(0, 0, 0, 0.55);
    position: relative;
    width: 28.125rem;
    height: 41.25rem;
    padding: 4rem;
    ${customMedia.lessThan("tablet")`
    padding:0.6rem;
    height:35rem;
    `}
  }

  .input-container {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 1.2rem;
  }

  .input-empty {
    color: #fff !important;
    background: #333 !important;
    border: 0;
    border-radius: 4px;
    height: 3rem;
    padding: 0.9rem 1.25rem 0;
  }

  form div label {
    position: absolute;
    top: 0.625rem;
    left: 1.25rem;
    pointer-events: none;
    color: #8a8a8a;
    font-size: 1rem;
    transition: transform 777ms ease-out, font-size 888ms ease-out;
  }

  form div {
    position: relative;
  }

  input:focus ~ label {
    top: 0.4375rem;
    font-size: 0.7rem;
  }

  input:focus {
    outline: none;
  }

  .input-error {
    border-bottom: 1px solid #db7302;
  }
  .checkbox-container {
    margin-left: 0.75rem;
    padding-left: 1.875rem;
    position: relative;
    font-size: 0.9rem;
    cursor: pointer;
    color: #999;
  }

  .checkbox-container input {
    display: none;
  }

  .checkbox-container .checkmark {
    display: inline-block;
    background: #454545;
    width: 1.1rem;
    height: 1.1rem;
    left: 0;
    top: 0;
    border-radius: 0.1rem;
    position: absolute;
  }

  .checkbox-container input:checked + .checkmark:after {
    content: "";
    position: absolute;
    height: 0.25rem;
    width: 0.625rem;
    border-left: 2px solid #000;
    border-bottom: 2px solid #000;
    top: 25%;
    left: 21%;
    transform: rotate(-45deg);
  }

  .needhelp {
    text-decoration: none;
    color: #828282;
    margin-left: 6.6rem;
    font-size: 0.9rem;
    &:hover {
      text-decoration: underline;
    }
    ${customMedia.lessThan("tablet")`
    margin-left:13rem
    `}
  }

  .bottom-form img {
    width: 1.5625rem;
    margin: 0.625rem 0.625rem -0.4375rem 0;
  }

  .login-fb-text {
    color: #828282;
    font-size: 0.9rem;
  }

  .bottom-form {
    position: absolute;
    bottom: 0;
    margin-bottom: 4rem;
  }

  .sign-up-text {
    font-size: 1.1rem;
    color: #fff;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Button = styled.button`
  color: #fff;
  background: rgba(229, 9, 20);
  border: none;
  outline: none;
  padding: 0.8rem 1.3rem;
  border-radius: 2px;
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  transition: all 777ms ease-in;
  cursor: pointer;
  text-decoration: none;
  margin: 1rem 0;
`;

const LoginForm = () => {
  const [state, setState] = useState({
    email: "",
    password: " ",
    emailError: "",
    passwordError: "",
  });
  const [check, setCheck] = useState(true);

  const handleEmailChange = (e) => {
    setState({ ...state, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    if (e.target.value.length) {
      setState({ ...state, password: e.target.value });
    } else {
      setState({ ...state, password: " " });
    }
  };

  const regexp = RegExp(
    /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
  );

  const validate = () => {
    let inputError = false;
    let errorMail, errorPass;

    if (state.email.length < 5) {
      inputError = true;
      errorMail = "Please enter a valid email";
    } else if (!state.email.match(regexp)) {
      inputError = true;
      errorMail = (
        <span style={{ color: "red" }}>Your email address must be valid</span>
      );
    }
    if (state.password.length < 4) {
      inputError = true;
      errorPass = "Password must contain min. 4 characters";
    }

    setState({
      ...state,
      emailError: errorMail,
      passwordError: errorPass,
    });
    return inputError;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (!err) {
      setState({
        email: "",
        password: " ",
        emailError: "",
        passwordError: "",
      });
    }
  };
  const handleCheckBox = () => {
    setCheck(!check);
  };
  return (
    <FormContainer>
      <div className="form-container">
        <form>
          <h1>Sign in</h1>
          <div className="input-container">
            <input
              className={
                state.emailError ? "input-error input-empty" : "input-empty"
              }
              type="email"
              required
              onChange={handleEmailChange}
              value={state.email}
            />
            <label>Email or Phone Number</label>
            <span style={{ color: "#db7302" }}>{state.emailError}</span>
          </div>
          <div className="input-container">
            <input
              className={
                state.passwordError ? "input-error input-empty" : "input-empty"
              }
              type="password"
              required
              onChange={handlePasswordChange}
              value={state.password}
            />
            <label>Password</label>
            <span style={{ color: "#db7302" }}>{state.passwordError}</span>
          </div>
          <div className="input-container">
            <Button type="submit" onClick={onSubmit}>
              Sign In
            </Button>
          </div>
          <label className="checkbox-container">
            Remember me
            <input
              type="checkbox"
              defaultChecked={check}
              onChange={handleCheckBox}
            ></input>
            <span className="checkmark"></span>
          </label>
          <Link to="/" className="needhelp">
            Need help?
          </Link>
          <div className="bottom-form">
            <img src={FBlogo} alt="" />
            <Link to="/" className="login-fb-text">
              Login with Facebook
            </Link>
            <br />
            <br />
            <span style={{ color: "#999" }}>New to Netflix?&nbsp;</span>
            <Link to="/" className="sign-up-text">
              Sign up now
            </Link>
          </div>
        </form>
      </div>
    </FormContainer>
  );
};

export default LoginForm;
