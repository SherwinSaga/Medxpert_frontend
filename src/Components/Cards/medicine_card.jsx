import { useLocation } from "react-router-dom";
import Footer from "../HeaderFooter/footer";
import Navigation from "../HeaderFooter/navigation";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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

            <Footer/>
        </div>
        
    );
}

export default Medicine_Card;