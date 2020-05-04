import React from "react";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import LoginForm from "../components/login/LoginForm";
import LoginFooter from "../components/login/LoginFooter";
import logo from "../svg/logo.svg";

const customMedia = generateMedia({
  tablet: "640px",
  lgTablet: "740px",
});

const Logo = styled.img`
width:11rem;
position:absolute;
top:25%;
left:11%;
transform: translate(-50%, -50%)
margin-left:0;
${customMedia.lessThan("tablet")`
top:45%;
left:22%
`}

`;

const Login = () => {
  return (
    <div className="main-login-container">
      <div className="header-top">
        <Logo className="logo" src={logo} alt="" />
      </div>
      <LoginForm />
      <LoginFooter />
    </div>
  );
};

export default Login;
