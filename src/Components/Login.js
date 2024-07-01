import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowpassword] = useState(false);
  // const [hidePassword, setHidepassword] = useState(false);

 const Navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      alert("Password Must Have 8 Characters");
      return
    }
    try {
      let result = await fetch("http://127.0.0.1:5000/logIn", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!result.ok) {
        alert("TYPE CORRECT PASSWORD OR EMAIL")
      }else{
        toast.success("WELCOME TO WEBSITE", {
          position: "top-center",
          autoClose: 4000, // Auto-close the notification after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "text-center",
        });
        Navigate("/home")
      }
     
      result = await result.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div>
      <div className="container2">
        <div className="header">
          <div className="text">Log-in Form</div>
          <div className="underline"></div>
        </div>
        {/* INPUTS */}
        <div className="inputs">
          <div className="input">
            <i class="fa-solid fa-envelope"></i>
            <input
              type="email"
              className="ms-5"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input">
            <i class="fa-solid fa-lock me-5"></i>
            <input
              className="ms-5"
              type={showPassword ? "text" : "password"}
              placeholder="Passwords"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input onClick={() => setShowpassword(!showPassword)} type="checkbox"  /> <i className="fw-bolder">Show / Hide</i>
        </div>
      </div>
      <div className="submit">
        <button onClick={submit} className="Sign-In fw-bolder fs-4">
          Login
        </button>
        <Link to={"/register"}>
          <button className="Log-in-In btn-primary ms-5 fw-bolder fs-4">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
