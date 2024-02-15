import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import "./Aboutus.css"
import WhyImg from "../Assets/images/logo2.jpg"
const AboutUs = () => {
  return (
   
    <section className="why__choose-us">
    <Container>
      <Row>
       
        <Col lg="6" md="6">
          <div className="why__tasty-treat">
            <h2 className="tasty__treat-title mb-4">
               <span>About Us</span>
            </h2>
            <p className="tasty__treat-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dicta offiur modi nulla
              commodi impedit quaerat  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquid doloremque, maxime atque ut ex maiores? Atque id laborum fugit?ratione.
            </p>
            <ListGroup className="mt-4">
              <ListGroupItem className="border-0 ps-0">
                <p className="choose__us-title d-flex align-items-center gap-2">
                  {" "}
                  <i className="ri-checkbox-circle-line"></i>
                  Taste Of Rajasthan
                </p>
                <p className="choose__us-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, officia. autem?
                </p>
              </ListGroupItem>
              <ListGroupItem className="border-0 ps-0">
                <p className="choose__us-title d-flex align-items-center gap-2">
                  {" "}
                  <i className="ri-checkbox-circle-line"></i>
                  Quality Support
                </p>
                <p className="choose__us-description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Est, quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, illo!
                </p>
              </ListGroupItem>
              <ListGroupItem className="border-0 ps-0">
                <p className="choose__us-title d-flex align-items-center gap-2">
                  {" "}
                  <i className="ri-checkbox-circle-line"></i>
                  Availaible On Zomato
                </p>
                <p className="choose__us-description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Est, quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptas?
                </p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg="6" md="6" className='d-flex align-items-center'>
          <img src={WhyImg} alt="why-tasty-treat" className="w-100" />
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default AboutUs