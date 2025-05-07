import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";

const propertyData = [
    { id: 1, location: "Guindy, Chennai South", rate: "₹17,050/sq.ft", image: "/images/Chennai/Guindy.jpg" },
    { id: 2, location: "Nungambakkam, Chennai Central", rate: "₹20,000/sq.ft", image: "/images/Chennai/Nungam.jpg" },
    { id: 3, location: "T Nagar, Chennai South", rate: "₹28,000/sq.ft", image: "/images/Chennai/T.jpg" },
    { id: 4, location: "Vengaivasal, Chennai South", rate: "₹7,000/sq.ft", image: "/images/Chennai/Vengaivasa.jpg" },
    { id: 5, location: "Vanagram, West Chennai", rate: "₹8,900/sq.ft", image: "/images/Chennai/Vanagram.jpg" },
    { id: 6, location: "AnnaNagar, Chennai North", rate: "₹15,890/sq.ft", image: "/images/Chennai/Anna.jpg" },
    { id: 7, location: "Urupakkam, Chennai South", rate: "₹5,500/sq.ft", image: "/images/Chennai/Uru.jpg" },
    { id: 8, location: "Avadi, North Chennai", rate: "₹5,450/sq.ft", image: "/images/Chennai/Avadi.jpg" },
    { id: 9, location: "Choolaimedu, Chennai Central ", rate: "₹30,000/sq.ft", image: "/images/Chennai/Choolaimedu.jpg" },
    {id: 10, location: "Pammal, Chennai South", rate: "₹7,000/sq.ft", image: "/images/Chennai/Pammal.jpg" }
    ];

const PropertyRateinChennai = () => {
  return (
    <>
      <h1 className="color-gray text-center mt-5 mb-5">Property Rates in Chennai</h1>
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

export default PropertyRateinChennai