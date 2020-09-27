import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Register(props) {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    if (
      firstName.length < 1 ||
      lastName.length < 1 ||
      username.length < 1 ||
      password.length < 1
    ) {
      alert("SORRY!, Insufficient Data");
    } else {
      // alert("Username: " + username + " Password: " + password);
      props.registerUser({
        firstName,
        lastName,
        username,
        password,
      });
      history.push("/");
    }
  };
  return (
    <div className="register">
      <h1>Register Your Account</h1>

      <form>
        <h5>First Name</h5>
        <input
          type="text"
          value={firstName}
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <h5>Last Name</h5>
        <input
          type="text"
          value={lastName}
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <h5>Username</h5>
        <input
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <h5>Password</h5>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={register} className="register__button">
          Register
        </button>
      </form>

      <p>
        By registering you agree to the Treat Ur Hunger Conditions of providing
        services. Please see our Privacy Notice, our Cookies Notice and our
        Interest-Based Ads Notice.
      </p>
    </div>
  );
}

export default Register;
