import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";

const propertyData = [
    { id: 1, location: "Paschim Vihar, Delhi West", rate: "₹38,050/sq.ft", image: "/images/Delhi/Paschim.jpg" },
    { id: 2, location: "Greater Kailash, Delhi South", rate: "₹49,000/sq.ft", image: "/images/Delhi/Kailash.jpg" },
    { id: 3, location: "Moti Nagar, Delhi West", rate: "₹28,000/sq.ft", image: "/images/Delhi/Moti.jpg" },
    { id: 4, location: "Vasant Kunj, Delhi South", rate: "₹40,000/sq.ft", image: "/images/Delhi/Vasant.jpg" },
    { id: 5, location: "IP Extension, East Delhi", rate: "₹49,900/sq.ft", image: "/images/Delhi/IP.jpg" },
    { id: 6, location: "Khanpur, Delhi South", rate: "₹42,890/sq.ft", image: "/images/Delhi/Khanpur.jpg" },
    { id: 7, location: "Sector 15 Dwarka, Delhi South West", rate: "₹65,000/sq.ft", image: "/images/Delhi/15.jpg" },
    { id: 8, location: "Sector 28 Rohini, North Delhi", rate: "₹30,500/sq.ft", image: "/images/Delhi/Rohini.jpg" },
    { id: 9, location: "Vasundhara Enclava, East Delhi ", rate: "₹70,000/sq.ft", image: "/images/Delhi/Vasundhara.jpg" },
    {id: 10, location: "Sector 5 Dwarka, Delhi South West", rate: "₹48,000/sq.ft", image: "/images/Delhi/5.jpg" }
    ];

const PropertyRateinDelhi = () => {
  return (
    <>
      <h1 className="color-gray text-center mt-5 mb-5">Property Rates in Delhi</h1>
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

export default PropertyRateinDelhi