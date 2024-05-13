import { useLocation } from "react-router-dom";
import Footer from "../HeaderFooter/footer";
import Navigation from "../HeaderFooter/navigation";
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import ReviewCard from "./reviewCard";
import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography, MDBPagination, MDBPaginationLink, MDBPaginationItem } from "mdb-react-ui-kit";

function Medicine_Card(){
    const [review, setReview] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; 

    const location = useLocation();
    const medicine = location.state.medicine;

    useEffect(() => {
        fetch(`http://localhost:8080/reviews/specificMed/${medicine.id}`)
            .then(response => response.json())
            .then(data => {
                console.log("Received review data: ", data.reviewDate);
                setReview(data);
            });
    }, [])

    const pages = Math.ceil(review.length / itemsPerPage);
    const currentItems = review.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    
    return(
        <div>
            <Navigation/>
            <div className="container mt-10">
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

            <MDBContainer className="py-5">

                <MDBRow className="d-flex justify-content-center">
                    <MDBCol md="10" xl="8" className="text-center"><h3 className="mb-4 text-5xl">Feedback</h3></MDBCol>
                </MDBRow>
                <ReviewCard reviews={currentItems} />

                <MDBPagination className="justify-content-center">
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

            </MDBContainer>

            <Footer/>
        </div>      
    );
}

export default Medicine_Card;
