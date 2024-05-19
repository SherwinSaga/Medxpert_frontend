import React from 'react';
import { MDBCol, MDBIcon, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { getCurrentUser } from '../utility/utility';

function ReviewCard({ reviews }) {

    const user = getCurrentUser();

    const handleclick = (reviewID) => {
        fetch(`http://localhost:8080/report/add/${reviewID}/${user.user_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
           
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert("Report submitted successfully");
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Failed to submit report");
        });
    }

    return (
        <div className="mb-10">
            <MDBRow className="text-center">
                {reviews.map((review) => (
                    <MDBCol key={review.review_ID} md="4" className="mb-5 mb-md-0">
                        <div className="d-flex justify-content-center mb-4"></div>
                        <h6 className="text-primary mb-1">{review.user_id.usersname}</h6>
                        <i className="fas fa-flag" onClick={() => handleclick(review.review_ID)}></i>
                        <p className="px-xl-3 mb-3 mt-3">
                            <MDBIcon fas icon="quote-left" className="pe-2" />
                            {review.feedback}
                        </p>
                        <MDBTypography listUnStyled className="d-flex justify-content-center mb-0 mt-3">
                            {review.rating === 1 && <li><MDBIcon fas icon="thumbs-up" size="xl" className="text-success me-2" /></li>}
                            {review.rating === 0 && <li><MDBIcon fas icon="thumbs-down" size="xl" className="text-danger ms-2" /></li>}
                        </MDBTypography>
                    </MDBCol>
                ))}
            </MDBRow>
        </div>
    );
}

export default ReviewCard;
