import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeNavBar.module.scss';
import {Nav, Navbar, NavItem, NavLink, NavbarBrand} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const MemeNavBar = (props) => (
  <div className={styles.MemeNavBar} data-testid="MemeNavBar">
    <Navbar bg="primary">
      <NavbarBrand href="#">Title</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink href="/home">Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="link-1">Option 2</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="disabled" disabled>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);

MemeNavBar.propTypes = {};

MemeNavBar.defaultProps = {};

export default MemeNavBar;
