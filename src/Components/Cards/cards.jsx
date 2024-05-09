import "./cards.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ medicine }){
    return (
        <Card style={{ width: '18rem', display: 'flex', flexDirection: 'column' }} className="cardDiv"> 
          <Card.Body style={{ flex: '1 0 auto' }}>
            <Card.Title style={{ color: 'white' }}>{medicine.medicine_name}</Card.Title>
            <Card.Text style={{ color: 'gray' }}>
            {medicine.medicine_desc}
            </Card.Text>
          </Card.Body>
          <div className="pt-1" style={{ flexShrink: '0', padding: '10px 10px' }}>
            <Button variant="primary" className="cardButton">Read More</Button>
          </div>
        </Card>
      );
}

export default Cards;
