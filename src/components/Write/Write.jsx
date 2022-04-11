import React from "react";
import { Col, Container, Row } from "reactstrap";
import LastPosts from "../LastPosts/LastPosts";
import Sidebar from "../Sidebar/Sidebar";
import WritePage from "../WritePage/WritePage";

export default function Write(props) {
  return (
    <Container className="home bodyContentElement">
      <Row>
        {props.matches && (
          <Col xs lg="2">
            <Sidebar />
          </Col>
        )}
        
        <Col>
        <WritePage/>
        </Col>

        {props.matches && (
          <Col xs lg="2">
            <LastPosts />
          </Col>
        )}
      </Row>
    </Container>
  );
}
