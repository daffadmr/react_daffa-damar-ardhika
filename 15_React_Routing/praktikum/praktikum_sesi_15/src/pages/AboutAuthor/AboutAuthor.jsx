import React from "react";
import Header from "../../components/Header";

const AboutAuthor = () => {
  return (
    <>
      <Header aboutApp={"About App"} aboutPage={"About Author"} />
      <div className="about">
        <h1>About the Author</h1>
        <p>This app was developed by someone, a self-taught web developer and technical writer</p>
      </div>
    </>
  );
};

export default AboutAuthor;
