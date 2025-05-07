import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

const propertyData = [
    { id: 1, location: "Kollur, West Hyderabad", rate: "₹27,050/sq.ft", image: "/images/Hyderabad/Kollur.jpg" },
    { id: 2, location: "Dilsukh Nagar, East Hyderabad", rate: "₹30,000/sq.ft", image: "/images/Hyderabad/Sukh.jpg" },
    { id: 3, location: "Kokapet, West Hyderabad", rate: "₹28,050/sq.ft", image: "/images/Hyderabad/Koka.jpg" },
    { id: 4, location: "Boduppal, East Hyderabad", rate: "₹10,000/sq.ft", image: "/images/Hyderabad/Boduppal.jpg" },
    { id: 5, location: "Whitefields, West Hyderabad", rate: "₹28,890/sq.ft", image: "/images/Hyderabad/Whitefields.jpg" },
    { id: 6, location: "Adibatla, South-East Hyderabad", rate: "₹45,890/sq.ft", image: "/images/Hyderabad/Adibatla.jpg" },
    { id: 7, location: "Narsingi, West Hyderabad", rate: "₹75,500/sq.ft", image: "/images/Hyderabad/Narsingi.jpg" },
    { id: 8, location: "Jubilee Hills, Central Hyderabad", rate: "₹85,450/sq.ft", image: "/images/Hyderabad/Jubilee Hills.jpg" },
    { id: 9, location: "Aminpur, West Hyderabad ", rate: "₹30,000/sq.ft", image: "/images/Hyderabad/Aminpur.jpg" },
    {id: 10, location: "Miyapur, West Hyderabad ", rate: "₹27,000/sq.ft", image: "/images/Hyderabad/Miyapur.jpg" }
    ];

const PropertyRateinHyderabad = () => {
  return (
    <>
      <h1 className="color-gray text-center mt-5 mb-5">Property Rates in Hyderabad</h1>
      <Container className="mt-4">
    <Row>
      {propertyData.map( (property, index) => (
        <Col md={6} key={property.id} className="mb-4">
          <Card>
            <Card.Img variant="top" src={property.image} alt="Property Image" 
            style={{
              height: "60vh"
            }}/>
            <Card.Body>
              <Card.Title className="fw-bolder fs-9">{property.location}</Card.Title>
              <Card.Text>
                <strong>Current Rate:</strong> {property.rate}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
      </>
  )
}

export default PropertyRateinHyderabad