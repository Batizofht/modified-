import React from 'react';
import Homes from './homes';
import "./Ab.css"

const About = () => {
  return (
    <div className="container">
      <Homes />
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content pt-4 pt-lg-0">
                <h3>History</h3>
                <img src="https://switchiify.net.rw/u/classes/article/logoo.png" style={{ width: 300, marginLeft: -50 }} />
                <p className="fst-italic">
                  <strong>
                    <span style={{ color: "blue" }}>Saint Ignatius</span> High School Portal
                  </strong> is a school project developed by students at Saint Ignatius with a vision to transform the school. These students are represented by the name COMPUTER PROFESSIONALS and they are talented in providing and finding solutions for the school.
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-contents-center">
              <div className="content pt-4 pt-lg-0">
                <h3>Our Working Environment and Our Team</h3>
                <p className="fst-italic">
                  <strong>
                    <span style={{ color: "blue" }}></span>SICP AND ROBOTICS
                  </strong> is a team of students that work on various projects, including the school portal. We focus on innovation, creativity, and conducting research on various trending projects.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle"></i>8 members.</li>
                  <li><i className="bi bi-check-circle"></i>Coordinated by a teacher.</li>
                  <li><i className="bi bi-check-circle"></i>More than 20 school projects.</li>
                </ul>
                <div>
      <div className="person">
        <h4>President</h4>
        <p className="name">MUSHINZIMANA Baptiste</p>
        <div className="social-icons">
        <a className='bg-primary text-light okay' href="https://switchiify.net.rw/userprofile?user=1"><img style={{width:40,height:30,borderRadius:20}} src="https://switchiify.net.rw/assets/img/favicon.jpg" alt="" /></a>
          <a className='bg-primary text-light' href="https://www.instagram.com/mu_baptiste/"><i className="bi bi-instagram"></i></a>
         
          <a className='bg-primary text-light' href="https://rw.linkedin.com/in/mu-baptiste-43440424b"><i className="bi bi-linkedin"></i></a>
          <a className='bg-primary text-light' href="https://twitter.com/mushinzimana_j"><i className="bi bi-twitter"></i></a>
          
        </div>
      </div>

      <div className="person">
        <h4>Vice-Presidents</h4>
      <p className="name">IBAMBE Ketsia</p>
        <div className="social-icons">
        <a className='bg-primary text-light' href="https://www.instagram.com/__k.ims__/"><i className="bi bi-instagram"></i></a>
      </div>
      </div>
    </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
