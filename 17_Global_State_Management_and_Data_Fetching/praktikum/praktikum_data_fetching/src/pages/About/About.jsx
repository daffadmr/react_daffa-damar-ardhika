import React from "react";
import Header from "../../components/Header";

const About = () => {
  const aboutNav = [
    {
      name: "Home",
      route: "/"
    },
    {
      name: "About App",
      route: "/about-app"
    },
    {
      name: "About Author",
      route: "/about-author"
    }
  ]
  
  return (
    <>
      <Header data={aboutNav} />
      <div className="about">
        <h1>Ini adalah about page</h1>
      </div>
    </>
  );
};

export default About;
