import React from "react";
import { Col, Container, Row } from "reactstrap";
import LabelsPage from "../LabelsPage/LabelsPage";
import Sidebar from "../Sidebar/Sidebar";
import LastPost from "../LastPosts/LastPosts";

export default function Labels(props) {
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
            <LabelsPage />
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
