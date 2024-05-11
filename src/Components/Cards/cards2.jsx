import "./cards.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Navigate, useNavigate } from "react-router-dom";

function Cards2({ medicine }) {
    const navigate = useNavigate();

    const handleclick = () => {
      navigate("/medicine", {state: { medicine }})
    }

  return (
        <Card style={{ width: '18rem', display: 'flex', flexDirection: 'column' }} className="cardDiv"> 
          <Card.Body style={{ flex: '1 0 auto' }}>
            <Card.Title style={{ color: 'white' }}>{medicine.medicine_name}</Card.Title>
            <Card.Text style={{ color: 'gray' }}>
            {medicine.medicine_desc}
            </Card.Text>
          </Card.Body>
          <div className="pt-1" style={{ flexShrink: '0', padding: '10px 10px' }}>
            <Button variant="primary" className="cardButton" onClick={handleclick}>Review</Button>
          </div>
        </Card>
      );
}

export default Cards2