import React from 'react';
import Navigation from '../HeaderFooter/navigation';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import './service.css';
import AboutFooter from "../AboutPage/aboutFooter";

function Service(){
    return (
        <div>
          <Navigation />
          <MDBContainer fluid className="text-center py-5" style={{ backgroundColor: '#e3f2fd', height:'700px' }}>
            <h1 className="mb-4 mt-10" style={{fontSize: '30px'}}>Get in touch</h1>
            <p className="lead mb-5">
              We’re excited to work with you in our pursuit to provide better care for all and change the way healthcare works. Reach out to us today!
            </p>
    
            <MDBRow className="justify-content-center">
              <MDBCol md="3" className="mb-4">
                <MDBCard className="h-100">
                  <MDBCardBody>
                    <MDBCardTitle>MedXpert Sales Team</MDBCardTitle>
                    <MDBCardText>
                      Are you a company interested in partnering with Wheel? Contact our Sales Team.
                    </MDBCardText>
                    <MDBBtn color="primary" href="#!">Let's talk</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
    
              <MDBCol md="3" className="mb-4">
                <MDBCard className="h-100">
                  <MDBCardBody>
                    <MDBCardTitle>MedXpert Clinical Care Team</MDBCardTitle>
                    <MDBCardText>
                      Are you a clinician with questions about joining our care team? Contact a Clinician Advocate.
                    </MDBCardText>
                    <MDBBtn color="primary" href="#!">Get in touch</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
    
              <MDBCol md="3" className="mb-4">
                <MDBCard className="h-100">
                  <MDBCardBody>
                    <MDBCardTitle>MedXpert Employee Opportunities</MDBCardTitle>
                    <MDBCardText>
                      Are you interested in joining the Corporate team at Wheel? Explore our Careers page!
                    </MDBCardText>
                    <MDBBtn color="primary" href="#!">Inquire here</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
    
            <MDBRow className="justify-content-center mt-4">
              <MDBCol md="6">
                <MDBCard className="h-100">
                  <MDBCardBody>
                    <MDBCardTitle>MedXpert Press Inquiries</MDBCardTitle>
                    <MDBCardText>
                      Do you have ideas or questions related to press opportunities with Wheel? Contact our PR team.
                    </MDBCardText>
                    <MDBBtn color="primary" href="#!">Reach out now</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <AboutFooter />
        </div>
      );

}

export default Service;