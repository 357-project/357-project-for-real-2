import React from "react";
import ReactDOM from "react-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import {Link} from "react-router-dom";

const SignUp = ()=> {
    return (
        <div className="App">
            <h2>Sign Up</h2>
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
                <FormGroup>
                    <Label for="examplePassword">Verify Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                    />
                </FormGroup>
                <Link to='/SignIn'>
                    <Button className='button' path='/Home'>Submit</Button>
                </Link>

            </Form>
        </div>
    );
}

export default SignUp;