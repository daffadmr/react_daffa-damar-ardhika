import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleNavSlide = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <header>
        <nav>
          <ul className={isChecked ? "slide" : ""}>
            {data.map((list, index) => {
              return (
                <li key={`${list}_${index}`}>
                  <Link className="link" to={list.route}>
                    {list.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hamburger-button">
          <input type="checkbox" onClick={handleNavSlide} />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </>
  );
};

export default Header;
