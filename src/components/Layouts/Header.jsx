import React, { useState, useEffect } from "react";
import "../../styles/HeaderStyle.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/logo/logo1.png";

function Header() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const changeValueOnScroll = () => {
      const scrollValue = document.documentElement.scrollTop;
      setNav(scrollValue > 100);
    };

    window.addEventListener("scroll", changeValueOnScroll);
    return () => window.removeEventListener("scroll", changeValueOnScroll);
  }, []);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                <ScrollLink
                  to="section1"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Home
                </ScrollLink>
              </Nav.Link>
              <Nav.Link>
                <ScrollLink
                  to="section2"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  About
                </ScrollLink>
              </Nav.Link>
              <Nav.Link>
                <ScrollLink
                  to="section3"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Our Menu
                </ScrollLink>
              </Nav.Link>
              <Nav.Link>
                <ScrollLink
                  to="section5"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Shop
                </ScrollLink>
              </Nav.Link>
              <Nav.Link>
                <ScrollLink
                  to="section6"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Blog
                </ScrollLink>
              </Nav.Link>
              <Nav.Link>
                <ScrollLink
                  to="section7"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Contact
                </ScrollLink>
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
