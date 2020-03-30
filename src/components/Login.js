import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';




function Login(props) {

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
        <form onSubmit={(e) => props.handle_login(e, state)} >
            <div className="container rounded">
                <h3 className="title"> Log In</h3>
                <Form className="email">
                    <Form.Group htmlFor="username" className="email" controlId="formBasicEmail">
                        <Form.Label className="email font-weight-bold">Username</Form.Label>
                        <Form.Control className="email" required type="text" name="username" value={state.username} required onChange={handleChange} placeholder="Enter Username">
                        </Form.Control>
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
                            Log In
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

export default Login;

Login.propTypes = {
    handle_login: PropTypes.func.isRequired
};