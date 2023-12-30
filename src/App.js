import React from "react";
import "./App.css"
import Header from "./component/Header.js"
import Main from "./component/Main.js"
import Footer from "./component/Footer.js"
import profile from "./images/profile-logo.jpg"


export default function App() {
  return(
    <div className="app--container">
      <div className="app--container--two">
      <Header img={profile}/>
      <Main />
      <Footer />
      </div>
    </div>
  )
}