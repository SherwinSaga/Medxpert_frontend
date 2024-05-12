import React from 'react';
import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from "mdb-react-ui-kit";

function ReviewCard() {
  return (
    <div className="mb-10">
      <MDBContainer className="py-5">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="10" xl="8" className="text-center"><h3 className="mb-4 text-5xl">Reviews</h3></MDBCol>
        </MDBRow>
        <MDBRow className="text-center">
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4"></div>
            <h5 className="mb-3 mt-3">Sherwin "The Rock" Saga</h5>
            <h6 className="text-primary mb-3">Web Developer</h6>
            <p className="px-xl-3 mb-3 mt-3">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
              id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <MDBTypography listUnStyled className="d-flex justify-content-center mb-0 mt-3">
              <li><MDBIcon fas icon="thumbs-up" size="xl" className="text-success me-2" /></li>
              <li><MDBIcon fas icon="thumbs-down" size="xl" className="text-danger ms-2" /></li>
            </MDBTypography>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4"></div>
            <h5 className="mb-3 mt-3">Bato Saga</h5>
            <h6 className="text-primary mb-3">Graphic Designer</h6>
            <p className="px-xl-3 mb-3 mt-3">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <MDBTypography listUnStyled className="d-flex justify-content-center mb-0 mt-3">
              <li><MDBIcon fas icon="thumbs-up" size="xl" className="text-success me-2" /></li>
              <li><MDBIcon fas icon="thumbs-down" size="xl" className="text-danger ms-2" /></li>
            </MDBTypography>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4"></div>
            <h5 className="mb-3 mt-3">Wingko Sama</h5>
            <h6 className="text-primary mb-3">Marketing Specialist</h6>
            <p className="px-xl-3 mb-3 mt-3">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
            <MDBTypography listUnStyled className="d-flex justify-content-center mb-0 mt-3">
              <li><MDBIcon fas icon="thumbs-up" size="xl" className="text-success me-2" /></li>
              <li><MDBIcon fas icon="thumbs-down" size="xl" className="text-danger ms-2" /></li>
            </MDBTypography>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default ReviewCard;
