
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu'
import { Route, Link } from 'react-router-dom'


function Nav(props) {

  const logged_out_nav = (
    <div>
      <span><Link onClick={props.erroroff} to='/login' className="na p-3"><Button color="inherit">Login</Button></Link></span>
      <span><Link onClick={props.erroroff} to='/signup' className="na p-3"><Button color="inherit">Sign Up</Button></Link></span>
    </div>
  );

  const logged_in_nav = (
    <ul>
      <Link to='/' onClick={props.handle_logout} className="na p-3"><Button color="inherit">Log Out</Button></Link>
    </ul>
  );

  const choice = <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" >
          News
    </Typography>
        <div className="login">
          {choice}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};