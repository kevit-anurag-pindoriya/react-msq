import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux/es/exports";

function From() {
  const dispatch = useDispatch();
  const [lang, setLang] = useState("English");

  const [isLogin, setIsLogin] = useState(false);
  const nameref = useRef();
  const validator = () => {
    if (nameref.current.value === "") {
      alert("Enter name");
      setIsLogin(false);

      return;
    }
    setIsLogin(true);
    dispatch({ type: "LOGIN", payload: true });
    dispatch({ type: "ADDLANG", payload: lang });
  };
  return (
    <>
      <section className="form-all">
        <div className="form">
          <div className="form__div-name">
            <label htmlFor="name">Enter Name : </label>
            <input
              type="text"
              id="name"
              className="size"
              ref={nameref}
              required
            ></input>
          </div>

          <div className="form__div-gender">
            <label>Select Gender : </label>
            <select className="size">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="form__div-language">
            <label>Language : </label>
            <select onChange={(e) => setLang(e.target.value)} className="size">
              <option>English</option>
              <option>Gujarati</option>
            </select>
          </div>
          <div className="form__div-button">
            <Link
              to={{
                pathname: "/quiz",
                state: { language: lang, islogin: isLogin },
              }}
            >
              <button
                className="form__div-button--button size"
                onClick={validator}
              >
                Let's beging
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default From;
