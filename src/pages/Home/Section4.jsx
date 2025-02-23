import { Col, Container, Row } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center"> 
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a Tasty Coffee</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, impedit. Optio aut sunt temporibus pariatur cumque,
                adipisci earum laborum eveniet reprehenderit? Fugiat libero
                repellendus veritatis in adipisci id nam facilis!
              </p>
              <ul>
                <li>
                  <p>
                    Fringilla risus, luctus mauris orci auctor purus euismod
                    pretium purus pretium ligula rutrum tempor sapien
                  </p>
                </li>

                <li>
                  <p>Quaerat sodales sapien euismod purus blandit</p>
                </li>
                <li>
                  <p>
                    Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                    sodales sapien undo pretium a purus mauris
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}

      <section className="bg_parallax_scroll">  </section>
    </>
  );
}

export default Section4;
