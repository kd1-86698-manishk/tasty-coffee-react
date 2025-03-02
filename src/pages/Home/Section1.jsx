import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Burger from "../../assets/hero/coffee1.png";
import { Link } from "react-router-dom";
function Section1() {
  return (
    <section className="hero_section" id="section1">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} alt="Hero" className="img-fluid" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h3_lg">$6.99</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">Iced Coffee</h1>
              <h2 className="text-white">Coffee & More</h2>
              <p className="text-white pt-2 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae sed itaque sapiente, perspiciatis modi debitis
                corrupti possimus laudantium natus eaque nesciunt voluptatum
                provident magnam deserunt, necessitatibus ipsum. At, repellat
                beatae?
              </p>
              <Link to="/" className="btn order_now" >
              Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section1;
