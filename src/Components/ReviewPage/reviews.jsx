import Cards2 from "../Cards/cards2";
import Footer from "../HeaderFooter/footer";
import Navigation from "../HeaderFooter/navigation";
import { useState, useEffect } from "react";
import { MDBCard, MDBCardBody  } from 'mdb-react-ui-kit';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
  MDBCarousel
} from "mdb-react-ui-kit";

function Reviews(){
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:8080/reviews`)
            .then(response => response.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <>
          <Navigation />
          
          <section>
            <MDBContainer className="py-5" style={{ maxWidth: "2000px" }}>
              <MDBRow className="justify-content-center">
                <MDBCol md="12" lg="10">
                  <MDBCard className="text-dark">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h4" className="mb-0">
                        Recent feedback
                      </MDBTypography>
                      <p className="fw-light mb-4 pb-2">
                        Latest Feedback section by users
                      </p>
                    </MDBCardBody>
      
                    <hr className="my-0" />

                    {reviews.map((review) => ( 
                      <MDBCardBody className="p-4">
                        <div className="d-flex flex-start">
                          <div>
                            <MDBTypography tag="h6" className="fw-bold mb-1">
                              {review.user_id.usersname}
                            </MDBTypography>
                            <p>{review.medicine_id.medicine_Name}</p>
                            <div className="d-flex align-items-center mb-3">
                              <p className="mb-0">
                                {new Date(review.reviewdate).toLocaleDateString()}
                              </p>
                            </div>
                            <p className="mb-0">
                              {review.feedback}
                            </p>
                          </div>
                        </div>
                      </MDBCardBody>
                    ))}
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
          <Footer />
        </>
    );
}

export default Reviews;
