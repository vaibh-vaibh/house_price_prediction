import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const cities = [
  {
    name: "Bangalore",
    img: "/images/Bangalore.jpg",
    link: "/price-trends/price-trends-in-bangalore"
  },
  {
    name: "Mumbai",
    img: "/images/Mumbai.jpg",
    link: "/price-trends/price-trends-in-mumbai"
  },
  {
    name: "Delhi",
    img: "/images/Delhi.jpg",
    link: "/price-trends/price-trends-in-delhi"
  },
  {
    name: "Chennai",
    img: "/images/Chennai.jpg",
    link: "/price-trends/price-trends-in-chennai"
  },
  {
    name: "Hyderabad",
    img: "/images/Hyderabad1.jpg",
    link: "/price-trends/price-trends-in-hyderabad"
  },
  {
    name: "Kolkata",
    img: "/images/Kolkata.jpg",
    link: "/price-trends/price-trends-in-kolkata"
  }
];

const PriceTrendCity = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center fw-bold">
        Select a City
        <span className="d-block text-secondary fs-5">To check property rates & price trends</span>
      </h2>
      <Row className="mt-4">
        {cities.map((city, index) => (
          <Col key={index} md={4} sm={6} xs={12} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={city.img} alt={`${city.name} Price Trends`}
              style={
                {
                    height: "40vh"
                }
              } />
              <Card.Body>
                <Card.Title>
                  <a href={city.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-semibold ">
                    Property Rates in {city.name}
                  </a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PriceTrendCity;
