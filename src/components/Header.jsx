import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const style = {
    textDecoration: 'none',
    marginRight: '2rem',
  };

  const location = useLocation();

  return (
    <Navbar bg="primary" expand="lg">
      <Container className="d-flex justify-content-start">
        <Link
          to="/"
          style={style}
          className={
            location.pathname === '/' ? 'btn btn-outline-light' : 'btn'
          }
        >
          <Navbar.Brand>Twits List</Navbar.Brand>
        </Link>
        <Link
          to="/add"
          style={style}
          className={
            location.pathname === '/add' ? 'btn btn-outline-light' : 'btn'
          }
        >
          <Navbar.Brand href="/add">Add Twits</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
