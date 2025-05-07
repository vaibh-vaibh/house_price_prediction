import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

const propertyData = [
    { id: 1, location: "Belgharia Expressway, Kolkata North", rate: "₹50,050/sq.ft", image: "/images/Kolkata/Belgharia.jpg" },
    { id: 2, location: "Tollygunge, Kolkata South", rate: "₹10,000/sq.ft", image: "/images/Kolkata/Tolly.jpg" },
    { id: 3, location: "Serampore, Hooghly", rate: "₹45,000/sq.ft", image: "/images/Kolkata/Hoo.jpg" },
    { id: 4, location: "EM Bypass, Kolkata East", rate: "₹41,750/sq.ft", image: "/images/Kolkata/EM.jpg" },
    { id: 5, location: "Tangra, Kolkata Central", rate: "₹20,900/sq.ft", image: "/images/Kolkata/Tangra.jpg" },
    { id: 6, location: "Sinthee, Kolkata North", rate: "₹28,890/sq.ft", image: "/images/Kolkata/Sinthee.jpg" },
    { id: 7, location: "Joka, Kolkata South", rate: "₹15,500/sq.ft", image: "/images/Kolkata/Joka.jpg" },
    { id: 8, location: "New Town, East Kolkata", rate: "₹19,450/sq.ft", image: "/images/Kolkata/New Town.jpg" },
    { id: 9, location: "Kalighat, South Kolkata", rate: "₹15,000/sq.ft", image: "/images/Kolkata/Kalighat.jpg" },
    {id: 10, location: "Salt Lake, East Kolkata", rate: "₹10,000/sq.ft", image: "/images/Kolkata/Salt Lake.jpg" }
    ];

const PropertyRateinKolkata = () => {
  return (
    <>
      <h1 className="color-gray text-center mt-5 mb-5">Property Rates in Kolkata</h1>
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

export default PropertyRateinKolkata