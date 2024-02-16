import React from "react";
import { Col, Container, Row } from "reactstrap";
import rabdi1 from "../Assets/rabdi1.png";
import rabdi2 from "../Assets/rabdi2.png";
import rabdi3 from "../Assets/rabdi3.png";
import rabdi4 from "../Assets/rabdi3.png";
import "./Category.css";

const categoryData = [
  {
    display: "Rabdi",
    imgUrl: rabdi1,
  },
  {
    display: "Faluda",
    imgUrl: rabdi2,
  },

  {
    display: "Ice Dish",
    imgUrl: rabdi3,
  },

  {
    display: "Shrikhand",
    imgUrl: rabdi4,
  },
];
const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
            <div className="category__item d-flex align-items-center gap-2">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
