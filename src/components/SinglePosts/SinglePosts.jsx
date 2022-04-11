import React from "react";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../Sidebar/Sidebar";
import LastPosts from "../LastPosts/LastPosts";
import SinglePost from "../SinglePost/SinglePost";

export default function SinglePosts(props) {
  return (
    <Container className="home bodyContentElement">
      <Row>
        {props.matches && (
          <Col xs lg="2">
            <Sidebar />
          </Col>
        )}

        <Col>
          <SinglePost />
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
