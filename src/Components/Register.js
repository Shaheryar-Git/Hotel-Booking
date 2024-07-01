import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [loader, setLoader] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowpassword] = useState(false);
  const [hidePassword, setHidepassword] = useState(false);
  console.log(hidePassword);
  const [contact, setContact] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  });

  const Navigate = useNavigate();

  if (loader) {
    return (
      <ClipLoader
        className="text-center fw-bolder"
        color={"#ef0e0e"}
        loading={loader}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  const Register = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !contact) {
      alert("ALL INFORMATION ARE REQUIRED");
    }
    if (password.length < 8) {
      alert("MUST HAVE 8 CHARACTERS PASSWORDS");
    }

    try {
      let result = await fetch("http://127.0.0.1:5000/signIn", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          contact,
        }),
      });

      if (result.ok) {
        toast.success("SUCCESSFULLY REGISTERED", {
          position: "top-center",
          autoClose: 4000, // Auto-close the notification after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "text-center",
        });
        result = await result.json();
        Navigate("/login");
      }

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <div className="container2">
          <div className="header">
            <div className="text">Sign-In Form</div>
            <div className="underline"></div>
          </div>
          {/* INPUTS */}
          <div className="inputs">
            <div className="input">
              <i class="fa-solid fa-person fs-5 "></i>
              <input
                type="text"
                className="ms-5"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input">
              <i class="fa-solid fa-envelope"></i>
              <input
                type="email"
                className="ms-5"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <i
                onClick={() => setShowpassword(!showPassword)}
                class="fa fa-lock"
                aria-hidden="true"
              ></i>
              <input
                className="ms-5"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <strong>Password Must Have 8 Characters </strong>
            </div>
            <input
              onClick={() => setShowpassword(!showPassword)}
              type="checkbox"
            />{" "}
            <i className="fw-bolder">Show / Hide</i>
            <div className="input mt-3">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input
                className="ms-5"
                type={hidePassword ? "text" : "password"}
                placeholder="Reconfirmed Password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
            </div>
            <input
              className="fw-bolder"
              onClick={() => setHidepassword(!hidePassword)}
              type="checkbox"
            />{" "}
            <i className="fw-bolder">Show / Hide</i>
            <div className="input mt-3">
              <i className="fa fa-phone"></i>
              <input
                type="text"
                className="ms-5"
                placeholder="Contact Number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="submit">
          <button className="Sign-In fw-bolder fs-5" onClick={Register}>
            Register
          </button>
          <Link to={"/login"}>
            <button className="Log-in-In btn-primary ms-5 fw-bolder fs-5">
              Already Have Account
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
