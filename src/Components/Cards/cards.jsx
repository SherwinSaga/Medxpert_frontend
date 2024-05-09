import "./cards.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ medicine }){
    return (
        <Card style={{ width: '18rem' }} className="cardDiv"> 
          <Card.Body>
            <Card.Title style={{ color: 'white' }}>{medicine.medicine_name}</Card.Title>
            <Card.Text style={{ color: 'gray' }}>
            {medicine.medicine_desc}
            </Card.Text>
            <Button variant="primary" className="cardButton">Read More</Button>
          </Card.Body>
        </Card>
      );
}

export default Cards;