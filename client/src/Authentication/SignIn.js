import React from "react";
import ReactDOM from "react-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import {Link} from "react-router-dom";

const SignIn = ()=> {
    return (
        <div className="App">
            <h2>Sign In</h2>
            <Form className="form">
                <FormGroup>
                    <Label for="exampleEmail">Username</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="example@example.com"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                    />
                </FormGroup>
                <Link to='/MazeGame'>
                    <Button className='button'>Submit</Button>
                </Link>
            </Form>
        </div>
    );
}

export default SignIn;