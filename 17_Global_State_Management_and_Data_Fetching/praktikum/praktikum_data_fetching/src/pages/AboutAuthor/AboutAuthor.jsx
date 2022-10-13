import React from "react";
import Header from "../../components/Header";

const AboutAuthor = () => {
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
        <h1>About the Author</h1>
        <p>This app was developed by someone, a self-taught web developer and technical writer</p>
      </div>
    </>
  );
};

export default AboutAuthor;
