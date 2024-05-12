import { useLocation } from "react-router-dom";
import Footer from "../HeaderFooter/footer";
import Navigation from "../HeaderFooter/navigation";
import Card from 'react-bootstrap/Card';
import React from "react";
import ReviewCard from "./reviewCard";

function Medicine_Card(){

    const location = useLocation();
    const medicine = location.state.medicine;

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

            <ReviewCard />
            <Footer/>
        </div>
        
    );
}

export default Medicine_Card;
