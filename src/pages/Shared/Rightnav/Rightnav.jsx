import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGithub,FaGoogle,FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../Q-zoned/QZone';
import bg from '../../../assets/bg1.png';


const Rightnav = () => {
    return (
        <div>
            <h2>Login With</h2>
            <Button variant="primary" className='w-100'><FaGoogle/> Login with google</Button>
      <Button variant="secondary" className='w-100 mt-3'><FaGithub/> Login with github</Button>
      <div className='my-3'>
        <h4>Find Us On</h4>
        <ListGroup>
      <ListGroup.Item className='fs-5'><FaFacebookF style={{color: '#3B599C'}}/> Facebook</ListGroup.Item>
      <ListGroup.Item className='fs-5'><FaInstagram style={{color: '#D82D7E'}}/> Instagram</ListGroup.Item>
      <ListGroup.Item className='fs-5'><FaTwitter style={{color: '#58A7DE'}}/>Twitter</ListGroup.Item>
    </ListGroup>
      </div>
      <QZone></QZone>
      <div className='p-5' style={{ 
      backgroundImage: `url(${bg})` 
    }}>
    <div className='text-center'  style={{color: '#fff'}}>
<h2>Create an Amazing Newspaper</h2>
<p style={{padding:'15px', color: '#fff', fontSize: '20px'}} className='py-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
    <button style={{background: '#D72050', border:' none', outline: 'none', padding:'15px', color: '#fff', fontSize: '20px'}}>Learn More</button>
    </div>
      </div>
        </div>
    );
};

export default Rightnav;