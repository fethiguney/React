import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "./product";
import data from "./product.json";
const ProductList = () => {
  return (
    <Container className="my-5">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {data.map((item) => (
          <Col key={item.id}>
            <Product {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
