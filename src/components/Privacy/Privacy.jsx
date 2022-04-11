/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import LastPost from "../LastPosts/LastPosts";
import PrivacyPage from "../PrivacyPage/PrivacyPage";
import Sidebar from "../Sidebar/Sidebar";

export default function (props) {
  return (
    <div>
      <Container className="bodyContentElement">
        <Row>
          {props.matches && (
            <Col xs lg="2">
              <Sidebar />
            </Col>
          )}

          <Col>
            <PrivacyPage />
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
