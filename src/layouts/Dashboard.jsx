import React from 'react';
import ProductList from '../pages/ProductList';
import Categories from './Categories';
import Container from 'react-bootstrap/Container';
import { Row,Col } from 'react-bootstrap';
export default function Dashboard() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={4} >
            <Categories />
          </Col>
          <Col sm={8} >
            <ProductList />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
