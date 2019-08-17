import React, { Component } from "react";
import Header from "./Components/Header";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PageStyling = styled.div`
  * {
    text-align: center;
    place-items: center;
  }
`;

export class Login extends Component {
  render() {
    return (
      <PageStyling>
        <Header />
        <form>
          <label htmlFor="emailInput">
            Email Address: <br />
          </label>
          <input
            type="email"
            id="emailInput"
            placeholder="Enter your email here..."
          />
          <br />
          <label htmlFor="passwordInput">
            Password: <br />
          </label>
          <input
            type="password"
            id="passwordInput"
            placeholder="Enter your password here..."
          />
          <br />
          <input type="submit" id="submitButton" />
        </form>
        <div>
          <p id="small">Dont have an account yet?</p>
          <NavLink to="/signup" id="redirect">
            Sign Up
          </NavLink>
        </div>
      </PageStyling>
    );
  }
}

export default Login;
