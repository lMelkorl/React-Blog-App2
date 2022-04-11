import React from "react";
import { Col, Container, Row } from "reactstrap";
import ContactPage from "../ContactPage/ContactPage";
import LastPost from "../LastPosts/LastPosts";
import Sidebar from "../Sidebar/Sidebar";

export default function Contact(props) {
  return (
    <div>
      <Container className="home bodyContentElement">
        <Row>
          {props.matches && (
            <Col xs lg="2">
              <Sidebar />
            </Col>
          )}

          <Col>
            <ContactPage />
          </Col>

          {props.matches && (
            <Col xs lg="2">
              <LastPost />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}
