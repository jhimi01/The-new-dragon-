import React from 'react';
import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Leftnav from "../pages/Shared/LeftNav/Leftnav";
import Rightnav from "../pages/Shared/Rightnav/Rightnav";
import { Outlet } from "react-router-dom";


const Newslayout = () => {
    return (
        <div>
             <Header></Header>
      <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <Rightnav></Rightnav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
        </div>
    );
};

export default Newslayout;