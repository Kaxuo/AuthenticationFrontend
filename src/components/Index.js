import React from 'react';
import { Route, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function Index(props) {
    return (
        <div className="container rounded">
         <h3 className="title"> Do you wish to Sign up or Log In ?</h3>
         <Link onClick={props.erroroff} to='/login' className="button p-3">
            <Button className=" hell" variant="primary" type="submit">
              Log In
          </Button>
          </Link>
          <Link onClick={props.erroroff}  to='/signup' className="button p-3">
            <Button className=" hell" variant="primary" type="submit">
              Sign Up
          </Button>
          </Link>
        </div>
    )
}

export default Index;
