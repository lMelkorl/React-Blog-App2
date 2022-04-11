import React from "react";
import { Col, Container, Row } from "reactstrap";
import LastPost from "../LastPosts/LastPosts";
import Sidebar from "../Sidebar/Sidebar";
import CategoryPage from "../CategoryPage/CategoryPage";
export default function Category(props) {
  return (
      <Container className="bodyContentElement">
        <Row>
          {props.matches && (
            <Col xs lg="2">
              <Sidebar />
            </Col>
          )}

          <Col>
            <CategoryPage />
          </Col>

          {props.matches && (
            <Col xs lg="2">
              <LastPost />
            </Col>
          )}
        </Row>
      </Container>
  );
}
