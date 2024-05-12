import { useLocation } from "react-router-dom";
import Footer from "../HeaderFooter/footer";
import Navigation from "../HeaderFooter/navigation";
import Card from 'react-bootstrap/Card';
import React from "react";
import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from "mdb-react-ui-kit";

function Medicine_Card(){

    const location = useLocation();
    const medicine = location.state.medicine;

    return(
        <div>
            <Navigation/>

            <Card>
            <Card.Header className='text-5xl' style={{ fontWeight: 'bold' }}>{medicine.medicine_name}</Card.Header>
            <Card.Body>
                <Card.Title style={{ fontSize: '16px' }}>{medicine.medicine_desc}</Card.Title>
                <Card.Img variant="top" src="src/assets/paracetamol.jpg" style={{ maxHeight: '600px', overflowY: 'auto' }}/>
                <Card.Text style={{ fontSize: '15px' }}> <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Uses:</p>{medicine.medicine_uses}</Card.Text>
                <Card.Text style={{ fontSize: '15px' }}> <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Side Effects:</p>{medicine.medicine_side_effects}</Card.Text>
                <Card.Text style={{ fontSize: '15px' }}> <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Dosage:</p> {medicine.medicine_dosage}</Card.Text>
            </Card.Body>
            </Card>

        <div className="m-20">
            <MDBContainer className="py-5">
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="10" xl="8" className="text-center"><h3 className="mb-4 text-5xl">Reviews</h3></MDBCol>
            </MDBRow>
            <MDBRow className="text-center">
                <MDBCol md="4" className="mb-5 mb-md-0">
                <div className="d-flex justify-content-center mb-4"></div>
                <h5 className="mb-3">Sherwin "The Rock" Saga</h5>
                <h6 className="text-primary mb-3">Web Developer</h6>
                <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                    id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                </p>
                <MDBTypography listUnStyled className="d-flex justify-content-center mb-0">
                    <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
                    <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
                    <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
                    <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
                    <li><MDBIcon fas icon="star-half-alt" size="sm" className="text-warning" /></li>
                </MDBTypography>
                </MDBCol>
                <MDBCol md="4" className="mb-5 mb-md-0">
                <div className="d-flex justify-content-center mb-4"></div>
                <h5 className="mb-3">Bato Saga</h5>
                <h6 className="text-primary mb-3">Graphic Designer</h6>
                <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid commodi.
                </p>
                <MDBTypography listUnStyled className="d-flex justify-content-center mb-0">
                    <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
                    <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
                    <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
                    <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
                    <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
                </MDBTypography>
                </MDBCol>
                <MDBCol md="4" className="mb-5 mb-md-0">
                <div className="d-flex justify-content-center mb-4"></div>
                <h5 className="mb-3">Wingko Sama</h5>
                <h6 className="text-primary mb-3">Marketing Specialist</h6>
                <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>
                <MDBTypography listUnStyled className="d-flex justify-content-center mb-0">
                    <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
                    <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
                    <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
                    <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
                    <li><MDBIcon far icon="star" size="sm" className="text-warning" /></li>
                </MDBTypography>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </div>
            <Footer/>
        </div>
        
    );
}

export default Medicine_Card;