import React, { useState } from "react";
import {Link} from "react-router-dom";

const Header = ({about, aboutApp, aboutPage}) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleNavSlide = () => {
    setIsChecked(!isChecked)
  }

  return (
    <header>
      <nav>
          <ul className={isChecked ? "slide" : ""}>
            <Link className="link" to="/">Home</Link>
            <Link className={about ? "link" : "hidden"} to="/about">{about}</Link>
            <Link className="link" to="/about-app">{aboutApp}</Link>
            <Link className="link" to="/about-author">{aboutPage}</Link>
          </ul>
        </nav>
      <div className="hamburger-button">
        <input type="checkbox" onClick={handleNavSlide}/>
          <span></span>
          <span></span>
          <span></span>
      </div>
    </header>
  );
};

export default Header;
