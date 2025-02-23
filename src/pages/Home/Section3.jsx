import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/menu/coffee-1.jpg";
import Image2 from "../../assets/menu/coffee-2.jpg";
import Image3 from "../../assets/menu/coffee-3.jpg";
import Image4 from "../../assets/menu/coffee-4.jpg";
import Image5 from "../../assets/menu/coffee-5.jpg";
import Image6 from "../../assets/menu/coffee-6.jpg";
import Image7 from "../../assets/menu/coffee-7.jpg";
import Image8 from "../../assets/menu/coffee-8.jpg";
import Cards from "../../components/Layouts/Cards";
import { Link } from "react-router-dom";

// Mock Data Cards
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Iced Toffee Nut Crunch Latte",
    paragraph: "Delight your senses with our Iced Toffee Nut Crunch Latte & combination milk",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    image: Image2,
    title: "Iced Crunchy Red Mocha Latte",
    paragraph: "Almost too cute to drink, our Iced Crunchy Red Hat Mocha Latte ",
    rating: 4.5,
    price: 99.32,
  },
  {
    id: "0003",
    image: Image3,
    title: "Iced Caffè Latte",
    paragraph: "Our dark, Rich in flavour espresso is combined with milk and served over ice",
    rating: 4,
    price: 69.15,
  },
  {
    id: "0004",
    image: Image4,
    title: "Iced Creme Brulee Latte",
    paragraph: "Chill with the Iced Vienna Creamy Latte: espresso, milk, mocha, and Vanilla",
    rating: 3.5,
    price: 99.25,
  },
  {
    id: "0005",
    image: Image5,
    title: "Iced Gingerbread Latte",
    paragraph:
      "Get your festive cheer on with our Iced Gingerbread Latte. .",
    rating: 3.0,
    price: 59.25,
  },
  {
    id: "0006",
    image: Image6,
    title: "Caffe Latte",
    paragraph: "A blend of espresso and velvety milk infused with decadent Crème Brulee",
    rating: 3,
    price: 79.18,
  },
  {
    id: "0007",
    image: Image7,
    title: "Blonde Almond Latte",
    paragraph: "Ditch the dairy with our Plant-Based Almond special",
    rating: 2.5,
    price: 99.19,
},
{
    id: "0008",
    image: Image8,
    title: "Cappuccino",
    paragraph: "Dark,Rich in flavour espresso lies in wait under a smoothed and layer of foam.",
    rating: 2.0,
    price: 89.12,
  },
  // Add more mock data objects as needed
];

const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function Section3() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>OUR CRAZY COFFEE'S</h2>
            <p className="para">
              Aliquam a augue suscipit, luctus neque purus ipsum neque undo
              dolor primis libero tempus, blandit a cursus varius magna
            </p>
          </Col>
        </Row>
        <Row>
          {mockData.map((cardData, index) => (
            <Cards
              key={index}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
            />
          ))}
        </Row>

        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5 className="mb-0">CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5 className="mb-0">CHEESE CAKE</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
