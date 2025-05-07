import React from 'react';
import {Card} from 'react-bootstrap';

const AboutHeaderCard = () => {
  return (
    <>
    {/* about header image */}
    <Card
    style={{ borderRadius: '8px' }}>
          <div>
            <img
              src="/images/About.png"
              alt="About Us"
              className = "About-img"
            />
          </div>
        <Card.Body>
          {/* about text  */}
          <Card.Text className="card-text">
          Launched in 2025, VPHomes has grown into a trusted property portal that addresses every aspect of consumers’ needs in the real estate industry. Our platform serves as an online forum where buyers, sellers, and brokers/agents can exchange information about properties quickly, effectively, and economically. Here, you can advertise a property, search through detailed listings, explore various options, build your own property microsite, and stay updated with the latest news and trends in the realty sector.
          </Card.Text>
          {/* heading */}
          <h2 style={{ fontSize: '24px' }}>
            ✨ Why Choose VPHomes?
          </h2>

          <Card.Text className="card-text">
          Today, our portal proudly hosts various property listings spanning over 6 major cities across India. Also provide tailored advertising solutions—including microsites, banners, homepage links, and project pages—to enhance your property’s visibility and branding.
          </Card.Text>

          <Card.Text className="card-text">
          Embracing the ever-evolving landscape of online search behavior, VPHomes continually updates its information to assist prospective buyers in making informed decisions. We are committed to making your property search easier, quicker, and smarter!
          </Card.Text>

        </Card.Body>
      </Card>
    </>
  )
}

export default AboutHeaderCard