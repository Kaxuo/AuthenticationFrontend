import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function Signup(props) {


    const [state, setState] = useState({
        username: "",
        password: "",
    })

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        const newState = { ...state }
        newState[name] = value
        setState(newState)
    }
    return (
        <form onSubmit={e => props.handle_signup(e, state)}>
            <div className="container rounded">
                <h3 className="title"> Sign Up</h3>
                <Form className="email">
                    <Form.Group className="email" controlId="formBasicEmail">
                        <Form.Label htmlFor="username" className="email font-weight-bold">Username</Form.Label>
                        <Form.Control type="text" name="username" required value={state.username} onChange={handleChange} className="email" type="text" placeholder="Enter Username" />
                        <Form.Text className=" email text-muted">
                            We'll never share your username with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="email" controlId="formBasicPassword">
                        <Form.Label htmlFor="password" className="email font-weight-bold">Password</Form.Label>
                        <Form.Control type="password" name="password" required value={state.password} onChange={handleChange} placeholder="Password" />
                    </Form.Group>
                    <div className="button p-3">
                        <Button className=" hell" variant="primary" type="submit">
                            Sign Up
          </Button>
                    </div>
                    <Link to='/' className="button p-3">
                        <Button className=" hell" variant="primary" type="submit">
                            Back to Main Page
          </Button>
                    </Link>
                </Form>
            </div>
        </form>
    )
}

export default Signup;
Signup.propTypes = {
    handle_signup: PropTypes.func.isRequired
  };