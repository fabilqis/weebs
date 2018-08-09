import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input, Container, Row } from 'reactstrap';
import axios from 'axios';

export default class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            email:"",
            password:"",
            password_con:"",
            yourwishes:"",
            userdata: null,
            success:false
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    submitHandler(e){
        e.preventDefault();
            axios
            .post("http://localhost:8080/api/register", this.state)
            .then(result=>{
                if(result.data.errors) {
                    return this.setState(result.data);
                }
                return this.setState({
                    userdata : result.data,
                    errors: null,
                    success: true
                })
            })
    }

  render() {
    return (
    <div>
        <Container className="contform">
        <h1>Contact me?</h1>
        <p>Let's join the bandwagon of "Craft the magics"</p>
        <Row>
        <Col>
        
        {this.state.success && <p> You are sucessfully registered</p>}
        <Form onSubmit={this.submitHandler} >
            <FormGroup row>
            <Label for="exampleUsername" sm={2}>Username</Label>
            <Col sm={10}>
                <Input 
                onChange={this.changeHandler} 
                type="text" 
                name="username" 
                id="username" 
                placeholder="what is your username?" />{" "}
                {this.state.errors&& this.state.errors.username&& (
                    <p>{this.state.errors.username.msg}</p>
                )}
            </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="exampleEmail" sm={2}>Email</Label>
            <Col sm={10}>
                <Input 
                type="email" 
                name="email" 
                id="emailreg"
                onChange = {this.changeHandler} 
                placeholder="type your e-mail" />
                {this.state.errors&& this.state.errors.email&& 
                <p>{this.state.errors.email.msg}</p>}
            </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="examplePassword" sm={2}>Password</Label>
            <Col sm={10}>
                <Input 
                type="password" 
                name="password" 
                id="passwordreg"
                onChange={this.changeHandler} 
                placeholder="suggest a password" />
                {this.state.errors&& this.state.errors.password && (
                    <p>{this.state.errors.password.msg}</p>
                )}
            </Col>
            </FormGroup>

            <FormGroup row>
            <Label for="examplePassword" sm={2}>Re-type Password</Label>
            <Col sm={10}>
                <Input 
                type="password" 
                name="password_con" 
                id="password_con"
                onChange={this.changeHandler} 
                placeholder="re-type your password" />
                {this.state.errors&& this.state.errors.password_con && (
                    <p>{this.state.errors.password_con.msg}</p>
                )}
            </Col>
            </FormGroup>

            <FormGroup row>
            <Label for="exampleText" sm={2}>Your Wishes</Label>
            <Col sm={10}>
                <Input type="text"
                 name="yourwishes" 
                 id="yourwishes" 
                 onChange={this.changeHandler} 
                 />
                 {this.state.errors&& this.state.errors.yourwishes && (
                    <p>{this.state.errors.yourwishes.msg}</p>
                )}
            </Col>
            </FormGroup>

             {/* <FormGroup tag="fieldset">
             <legend className="col-form-label col-sm-2">Ready to join?</legend>
                    <FormGroup check>
                    <Label check>
                    <Input type="radio" 
                    name="radio1" 
                    id="radio"/>{' '}
                    Sure, I'm agree!
                    </Label>
                    </FormGroup>
            </FormGroup> */}

            <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
                <Button color="warning" size="lg" active>Submit</Button>
            </Col>
            </FormGroup>
    
        </Form>
      </Col>
      </Row>
      </Container>
      </div>
    );
  }
}