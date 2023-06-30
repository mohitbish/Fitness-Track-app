import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import {registerroute} from '../Routes/dbroute'


const Welcome = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, seteamil] = useState("");
  const [password, setpassword] = useState("");

  const handleusernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleemailChange = (event) => {
    seteamil(event.target.value);
  };
  const handlepasswordChange = (event) => {
    setpassword(event.target.value);
  };

  const inputvalidation = () => {
    if (username.length < 3) {
      alert("Username should be greater than 3 characters.");
      return false;
    } else if (email === "") {
      alert("Email is required.");
      return false;
    } else if (password.length < 8) {
      alert("Password should be equal or greater than 8 characters.");
      return false;
    }
    return true;
  };

  const handleregistersubmit = async() => {
    if (inputvalidation) {
      const { data } = await axios.post(registerroute, {
        username: username,
        email: email,
        password: password
      });
      if (data.status === false) {
        alert(data.msg);
      }
      if (data.status === true) {
        localStorage.setItem(
          "current-user",
          JSON.stringify(data.user)
        );
        navigate("/home");
      }
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-[#202124]">
      <div className=" h-[10vh] flex flex-row space justify-between px-5 sm:px-10   text-white border-2 border-gray-500">
        <Link
          className="sm:text-xl py-5 sm:py-10 py-x sm:px-10 font-bond uppercase hover:bg-[#323639]"
          to="/"
        >
          fit-trk
        </Link>
        <Link
          className="sm:text-xl py-5 sm:py-10 py-x sm:px-10 font-bond uppercase underline hover:bg-[#323639]"
          to="/Login"
        >
          Log In
        </Link>
      </div>
      <div className=" w-full h-[90vh] flex flex-col sm:flex-row space justify-between px-5 sm:px-10 py-10 sm:py-15  text-white border-2 border-gray-500">
        <p className=" sm:w-2/5 h-2/5 sm:h-full  aling-centre">
          Some welcome text add passport js auth down in row for md and icons
          for sm
        </p>
        <div className=" sm:w-3/5 h-3/5 sm:h-full mx-2 items-center">
          <h1 className="uppercase text-center">new to app?</h1>
          <form className="flex flex-col mx-20 mt-10 text-black" method="post" autoComplete="off">
            <input
              className="my-2 bg-[#D6D6D7] p-2"
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleusernameChange}
            />
            <input
              className="my-2 p-2  bg-[#D6D6D7]"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleemailChange}
            />
            <input
              className="my-2 p-2 bg-[#D6D6D7]"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handlepasswordChange}
            />
            <button
              className="text-white  uppercase border-2 hover:bg-[#323639] px-4 py-3 my-4 mx-auto flex items-center"
              onClick={handleregistersubmit}
            >
              sign-up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
