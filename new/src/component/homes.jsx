import React from 'react';

const Homes = () => {
  return (
    <div>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="https://switchiify.net.rw/u/classes/article/1593493892.jpeg" className="img-fluid rounded-5" alt="" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-contents-center">
              <div className="content pt-4 pt-lg-0">
                <h3>Learn more about us</h3>
                <p className="fst-italic">
                  <strong>
                    <span style={{ color: "blue" }}>Sint Ignatius</span> High School
                  </strong>{' '}
                  is a Science school located in KIGALI-KIBAGABAGA. Saint Ignatius High School is a school web and mobile software that takes education from inside the class to virtual and modern, based on providing efficient education to learners wherever they are. SIHS PORTAL, as the name of this product, is one of the only built and functional school software built in Rwanda. It goes beyond expectations.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>Helping our students to access all kinds of education.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>Connecting students in one school environment all over the world.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>Provision of free area for student freedom and expression.
                  </li>
                </ul>
                <p>
                  <span className="fw-bold">SIHS PORTAL</span> is a project that aims to take education to another level with many innovative and modern ways of providing education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homes;
