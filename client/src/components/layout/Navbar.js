import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <a href='profiles.html'>Developers</a>
      </li>
      <li>
        <Link to='register'>Register</Link>
      </li>
      <li>
        <Link to='login'>Login</Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <a onClick={logout} href='#!'>
          <i className='as.fa-sing-out-alt'></i>{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i class='fas fa-code'></i> DevConnector
        </Link>
      </h1>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  ayth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
