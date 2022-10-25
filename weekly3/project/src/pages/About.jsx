import React from "react";
import coupleImage from '../asset/about/beautiful-couple-having-their-wedding-beach.jpg'

const About = () => {
  return (
    <>
      <div className="about py-5 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="about-left col-12 col-md-6">
              <h1>About Us</h1>
              <p>
                White Picture Studio based trusted marketplace that connects
                travelers with wide array network of over 700+ local
                photographers in 400+ destinations around the world. Our job is
                simply coordinate photo tour sessions that captures the best
                moment while you and your loved ones exploring new places in the
                couple of hours. Our purpose is to change the way people
                remember their trips by giving one-of-a-kind experience and
                stunning photographs to make their trip unforgettable. Whether
                you are in honeymoon, anniversary, proposal, family session,
                friend/group getaway, or even solo travel; we will exclusively
                make your moment nicely taken. For your convenience, all of our
                photographer-partners in Frame A Trip have been curated based on
                their skill, style and (minimum) 5 years experience in the scope
                of photography. So Maximize your amazing travel experiences by
                letting us capture your best moments!
              </p>
            </div>
            <div className="about-right col-12 col-md-5 text-center text-md-end ms-md-5">
              <img src={coupleImage} width="200px" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
