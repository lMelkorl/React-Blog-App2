/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Jumbotron from "../Jumbotron/Jumbotron";
import LastPosts from "../LastPosts/LastPosts";
import Posts from "../Posts/Posts";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";
export default function Home(props) {
  return (
    <>
      <Jumbotron />
      <Container className="home bodyContentHomeElement">
        <Row>
          {props.matches && (
            <Col xs lg="2">
              <Sidebar />
            </Col>
          )}

          <Col>
            <Posts />
          </Col>

          {props.matches && (
            <Col xs lg="2">
              <LastPosts />
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}
