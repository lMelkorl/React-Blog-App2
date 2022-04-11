import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import AboutPage from '../AboutPage/AboutPage'
import LastPost from '../LastPosts/LastPosts'
import Sidebar from '../Sidebar/Sidebar'

export default function About(props) {
  return (
    <Container className="home bodyContentElement">
    <Row>
      {props.matches && (
        <Col xs lg="2">
          <Sidebar />
        </Col>
      )}

      <Col>
      <AboutPage/>
      </Col>

      {props.matches && (
        <Col xs lg="2">
          <LastPost />
        </Col>
      )}
    </Row>
  </Container>
  )
}
