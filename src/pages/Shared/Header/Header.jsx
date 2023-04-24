import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
// import {Button, Container} from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthProvider, { AuthContext } from '../../../provider/AuthProvider';
import Navigationbar from '../Navigationbar/Navigationbar';



const Header = () => {



    return (
        <Container>
       <div className="text-center">
       <img src={logo} alt="" />
        <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
       </div>
       <div style={{background: '#F3F3F3'}}  className='d-flex py-2' bg="light">
       <Button variant="danger">Latest</Button>
       <Marquee className='text-danger' speed={50}>
  I can be a React component, multiple React components, or just some text....
  I can be a React component, multiple React components, or just some text.
</Marquee>
       </div>
       <Navigationbar></Navigationbar>
        </Container>
    );
};

export default Header;