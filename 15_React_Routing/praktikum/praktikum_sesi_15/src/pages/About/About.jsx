import React from "react";
import Header from "../../components/Header";

const About = () => {
  return (
    <>
      <Header aboutApp={"About App"} aboutPage={"About Author"} />
      <div className="about">
        <h1>Ini adalah about page</h1>
      </div>
    </>
  );
};

export default About;
