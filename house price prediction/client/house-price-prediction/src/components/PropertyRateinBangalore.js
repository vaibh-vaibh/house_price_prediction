import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

const propertyData = [
    { id: 1, location: "Gunjur, Bangalore East", rate: "₹50,000/sq.ft", image: "/images/Bangalore/Gunjur.jpg" },
    { id: 2, location: "Kudlu Gate, Bangalore South", rate: "₹45,000/sq.ft", image: "/images/Bangalore/Kudlu.jpg" },
    { id: 3, location: "Rajajinagar, Bangalore West", rate: "₹60,000/sq.ft", image: "/images/Bangalore/Rajajinagar.jpg" },
    { id: 4, location: "Hoodi, Bangalore East", rate: "₹55,000/sq.ft", image: "/images/Bangalore/Hoodi.jpg" },
    { id: 5, location: "Kadubeesanahalli, Bangalore East", rate: "₹40,000/sq.ft", image: "/images/Bangalore/Kaduu.jpg" },
    { id: 6, location: "5th Phase JP Nagar, Bangalore South", rate: "₹42,000/sq.ft", image: "/images/Bangalore/5th Phase JP.jpg" },
    { id: 7, location: "Kundalahalli, Bangalore East", rate: "₹65,000/sq.ft", image: "/images/Bangalore/Kundalahalli.jpg" },
    { id: 8, location: "Green Glen Layout, Bangalore East", rate: "₹38,000/sq.ft", image: "/images/Bangalore/Green Glen.jpg" },
    { id: 9, location: "BTM 2nd Stage, Bangalore South", rate: "₹70,000/sq.ft", image: "/images/Bangalore/BTM.jpg" },
    { id: 10, location: "Surajpur Road, Bangalore East", rate: "₹48,000/sq.ft", image: "/images/Bangalore/Surajpur.jpg" }
    ];

const PropertyRateinBangalore = () =>
{
    return (
        <>
        <h1 className="color-gray text-center mt-5 mb-5">Property Rates in Bangalore</h1>
        <Container className="mt-4">
      <Row>
        {propertyData.map( (property, index) => (
          <Col md={6} key={property.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={property.image} alt="Property Image"
              style={{
                height: "60vh"
              }} />
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
    );
}

export default PropertyRateinBangalore;