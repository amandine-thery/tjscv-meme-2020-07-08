import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeNavBar.module.scss';
import {Nav, Navbar, NavItem, NavLink, NavbarBrand} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";

const MemeNavBar = (props) => (
  <div className={styles.MemeNavBar} data-testid="MemeNavBar">
    <Navbar bg="primary">
      <NavbarBrand href="#">Title</NavbarBrand>
      <Nav>
        <NavItem>
          <Link className="nav-link" to="/">Home</Link> {/* Il faut remettre les classes css */}
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/create">Create</Link>
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
