import { useLocation } from "react-router-dom";
import Footer from "../HeaderFooter/footer";
import Navigation from "../HeaderFooter/navigation";
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import ReviewCard from "./reviewCard";
import { MDBCol, MDBContainer, MDBRow, MDBPagination, MDBPaginationLink, MDBPaginationItem } from "mdb-react-ui-kit";
import { MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBTextArea, MDBTypography } from "mdb-react-ui-kit";
import { getCurrentUser } from "../utility/utility";
 
function Medicine_Card(){
    const [review, setReview] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; 

    const location = useLocation();
    const medicine = location.state.medicine;
    const user = getCurrentUser();
    
    const getCurrentDate = () => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        return formattedDate;
    };

    //review fields
    const reviewdate = getCurrentDate();
    const [rating, setRating] = useState(null); 
    const [feedback, setFeedback] = useState("");
    const user_id = user.user_id;
    const medicine_id = medicine.id;

    //get specific medicine
    useEffect(() => {
        fetch(`http://localhost:8080/reviews/specificMed/${medicine.id}`)
            .then(response => response.json())
            .then(data => {
                setReview(data);
            });
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const newReview = {
            feedback: feedback,
            rating: rating,
            reviewdate: reviewdate
        };
        
        fetch(`http://localhost:8080/reviews/add_review?User_id=${user_id}&medicineId=${medicine_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        
    
    };
    
    const handleclickUp = () => {
        setRating(1);
    }

    const handleclickDown = () => {
        setRating(0);
    }

    const pages = Math.ceil(review.length / itemsPerPage);
    const currentItems = review.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    
    return(
        <div>
            
            <Navigation/>
            <div className="container mt-10 pb-5">
                <div className="row">
                    <div className="col-md-6">
                        <Card className="h-100">
                            <Card.Img variant="top" src="src/assets/paracetamol.jpg" style={{ maxHeight: '600px', overflowY: 'auto' }}/>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card className="h-100">
                            <Card.Header className='text-5xl' style={{ fontWeight: 'bold' }}>{medicine.medicine_name}</Card.Header>
                            <Card.Body style={{ height: '100%' }}>
                                <Card.Title style={{ fontSize: '16px' }}>{medicine.medicine_desc}</Card.Title>
                                <Card.Text style={{ fontSize: '15px' }}> <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Uses:</p>{medicine.medicine_uses}</Card.Text>
                                <Card.Text style={{ fontSize: '15px' }}> <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Side Effects:</p>{medicine.medicine_side_effects}</Card.Text>
                                <Card.Text style={{ fontSize: '15px' }}> <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Dosage:</p> {medicine.medicine_dosage}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

            <MDBContainer className="">

            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="10" xl="8" className="text-center"><h3 className="mb-4 text-5xl">Feedback</h3></MDBCol>
            </MDBRow>
            <ReviewCard reviews={currentItems} />

                <div style={{ width: "100%" }}>
                    <MDBContainer className="mb-5" fluid>
                        <MDBRow>
                            <MDBCol md="12" lg="12" xl="12">
                                <MDBCard>
                                    <MDBCardBody className="p-4">
                                        <div className="d-flex flex-start w-100">

                                            <div className="w-100">
                                                <MDBTypography tag="h5" className="mb-2">Add a Feedback</MDBTypography>
                                                <div style={{ position: 'relative' }}>
                                                <textarea
                                                    placeholder="What is your feedback?"
                                                    rows={4}
                                                    style={{ width: "calc(100% - 70px)", height: "50px", border: "none", borderBottom: "1px solid #ced4da", outline: "none", resize: "none", marginBottom: "24px", display: "inline-block" }}
                                                    value={feedback}
                                                    onChange={(e) => setFeedback(e.target.value)}
                                                />
                                                <div style={{ display: "inline-block", float: "right" }}>
                                                <MDBIcon icon="thumbs-up" className="me-4" style={{ fontSize: '24px', color: rating === 1 ? 'blue' : 'black' }} onClick={handleclickUp} />
                                                    <MDBIcon icon="thumbs-down" style={{ fontSize: '24px', color: rating === 0 ? 'red' : 'black' }} onClick={handleclickDown} />
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-end">
                                                <MDBBtn color="danger" onClick={handleSubmit}>
                                                    Send <MDBIcon fas icon="long-arrow-alt-right ms-1" />
                                                </MDBBtn>
                                            </div>

                                            </div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
                
            </MDBContainer>

            <MDBPagination className="justify-content-center pb-20">
                    <MDBPaginationItem disabled={currentPage === 1}>
                        <MDBPaginationLink onClick={() => setCurrentPage(currentPage - 1)}>Previous</MDBPaginationLink>
                    </MDBPaginationItem>

                    {[...Array(pages)].map((page, i) => (
                        <MDBPaginationItem active={i + 1 === currentPage} key={i}>
                            <MDBPaginationLink onClick={() => setCurrentPage(i + 1)}>{i + 1}</MDBPaginationLink>
                        </MDBPaginationItem>
                    ))}

                    <MDBPaginationItem disabled={currentPage === pages}>
                        <MDBPaginationLink onClick={() => setCurrentPage(currentPage + 1)}>Next</MDBPaginationLink>
                    </MDBPaginationItem>  
                </MDBPagination>

            <Footer/>
        </div>      
    );
}

export default Medicine_Card;
