import Footer from "../HeaderFooter/footer";
import Navigation from '../HeaderFooter/navigation';
import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import './about.css';

function About() {
  return (
    <div>
      <Navigation />
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem itemId={1}>
          <img 
            src='src/assets/mission.jpg' 
            className='d-block w-100 carousel-image' 
            alt='...' 
          />
          <MDBCarouselCaption className="carousel-caption-custom">
            <h5>MISSION</h5>
            <p>At MedXpert, our mission is to empower individuals and healthcare professionals with reliable, 
              comprehensive, and up-to-date information about medications. We aim to foster a community where 
              knowledge is shared and enhanced, ensuring that everyone has access to the information they need 
              to make informed decisions about their health and wellness.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img 
            src='src/assets/vision.png' 
            className='d-block w-100 carousel-image' 
            alt='...' 
          />
          <MDBCarouselCaption className="carousel-caption-custom">
            <h5 style={{color:'black'}}>VISION</h5>
            <p style={{color:'black'}}>Our vision is to become the leading online resource for medication information, trusted by millions 
              around the globe. We aspire to create a platform where transparency, accuracy, and community engagement 
              are at the forefront, ultimately improving the quality of healthcare for all.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img 
            src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' 
            className='d-block w-100 carousel-image' 
            alt='...' 
          />
          <MDBCarouselCaption className="carousel-caption-custom">
            <h5>Our Story</h5>
            <p>MedXpert was born out of a simple yet profound idea: to make medication information easily accessible 
              and understandable for everyone. Our founders, a group of tech enthusiasts, 
              noticed a significant gap in the availability of reliable medical information online. Too often, patients and 
              healthcare professionals struggled to find accurate details about medications, leading to confusion and potential 
              health risks.</p>

            <p>In response, they decided to create MedXpert, a comprehensive database that houses detailed descriptions, usage 
              instructions, dosage guidelines, and much more for thousands of medications. What started as a small project quickly 
              grew, fueled by the dedication of our team and the enthusiastic support of our users.</p>

            <p>Today, MedXpert is more than just a database, it’s a thriving community. Our platform allows users to share their 
              experiences, rate medications, and provide valuable feedback that helps others make informed choices. We believe 
              that by combining expert knowledge with user insights, we can create a more informed and health-conscious society.</p>

            <p>Every day, we strive to expand our database, enhance our features, and improve user experience, driven by our commitment 
              to excellence and innovation. Join us on our journey to make the world of medicine clearer, safer, and more accessible 
              for everyone.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>  
      </MDBCarousel>
      <Footer />
    </div>
  );
}

export default About;
