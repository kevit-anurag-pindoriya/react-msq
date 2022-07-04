import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import Quiz from "./Quiz";
import { useState } from "react";

function From() {
  const [lang, setLang] = useState("English");
  console.log("This is a choos state", lang);
  return (
    <>
      <section className="form-all">
        <div className="form">
          <div className="form__div-name">
            <label htmlFor="name">Enter Name : </label>
            <input type="text" id="name" className="size"></input>
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
                state: { language: lang, islogin: true },
              }}
            >
              <button className="form__div-button--button size">
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
