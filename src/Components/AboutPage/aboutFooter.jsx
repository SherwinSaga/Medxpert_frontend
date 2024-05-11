import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function AboutFooter() {
  return (
    <div>
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ backgroundColor: '#051650', color: 'white' }}>
        
        <div className='me-5 d-none d-lg-block' >
          <span>Get connected with us on social networks:</span>
        </div>

      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                MEDXPERT
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Cocaine
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Marijuana
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Heroin
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Nubain
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                New York, NY 10012, US
              </p>
              <p>
                wingkosama@business.com
              </p>
              <p>
                 + 01 234 567 88
              </p>
              <p>
                 + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: '#051650', color: 'white' }}>
      © {new Date().getFullYear()} Copyright:{' '}
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MedXpert.com  
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default AboutFooter