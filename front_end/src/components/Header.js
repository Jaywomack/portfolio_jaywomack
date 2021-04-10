import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Wimage from '../images/w.png';
import Jimage from '../images/j.png';

function Header() {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Navbar.Brand href='#home'>
          <img
            alt=''
            src={Jimage}
            width='30'
            height='30'
            className='d-inline-block align-top '
          />
          <img
            alt=''
            src={Wimage}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          Jared Womack
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Header;
