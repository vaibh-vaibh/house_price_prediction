import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

const propertyData = [
    { id: 1, location: "Evershine Nagar, Mumbai West", rate: "₹38,050/sq.ft", image: "/images/Mumbai/Evershine Nagar.jpg" },
    { id: 2, location: "Worli, Mumbai South", rate: "₹49,000/sq.ft", image: "/images/Mumbai/Worli.jpg" },
    { id: 3, location: "Sher E Punjab Colony, Mumbai West", rate: "₹28,000/sq.ft", image: "/images/Mumbai/Sher E Punjab Colony.jpg" },
    { id: 4, location: "Wadala, Mumbai South", rate: "₹40,000/sq.ft", image: "/images/Mumbai/Wadala.jpg" },
    { id: 5, location: "Hiranandani Gardens Powai, Mumbai Central", rate: "₹49,900/sq.ft", image: "/images/Mumbai/Hiranandani Gardens Powai.jpg" },
    { id: 6, location: "Lower Parel, Mumbai South", rate: "₹42,890/sq.ft", image: "/images/Mumbai/Lower Parel.jpg" },
    { id: 7, location: "Vikhroli, Mumbai Central", rate: "₹65,000/sq.ft", image: "/images/Mumbai/Vikhroli.jpg" },
    { id: 8, location: "Jogeshwari West, Mumbai West", rate: "₹30,500/sq.ft", image: "/images/Mumbai/Jogeshwari West.jpg" },
    { id: 9, location: "Prabhadevi, Mumbai South", rate: "₹70,000/sq.ft", image: "/images/Mumbai/Prabhadevi.jpg" },
    {id: 10, location: "Kanjurmarg, Mumbai Central", rate: "₹48,000/sq.ft", image: "/images/Mumbai/Kanjurmarg.jpg" }
    ];

const PropertyRateinMumbai = () =>
{
    return (
      <>
      <h1 className="color-gray text-center mt-5 mb-5">Property Rates in Mumbai</h1>
      <Container className="mt-4">
    <Row>
      {propertyData.map ((property, index) => (
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
    );
}

export default PropertyRateinMumbai;