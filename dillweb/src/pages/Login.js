import React, { Component } from "react";
import { Button, Form, Input, Card, CardTitle, Row, Col, CardText } from 'reactstrap';
import axios from "axios";
axios.defaults.withCredentials = true;

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        password: "",
        email: "",
        error: null,
        valerrors: null
      };
      this.changeHandler = this.changeHandler.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
    }
  
    changeHandler(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    submitHandler(e) {
      e.preventDefault();
      axios
        .post("http://localhost:8080/api/login", this.state)
        .then(res => {
          if (res.data.error) {
            return this.setState({ error: res.data.message });
          }
          if (res.data.error) {
            return this.setState({ valerrors: res.data.error });
          }
          return (window.location = "/");
        });
    }
    render() {
      return (
        <div>
          <Row>
          <Col sm="4" className="justify-content-md-center Card">
          <Card className="text-center" body outline color="info">
          <img className="mx-auto d-block" src={loginIcon} width="55px" alt="login icon" />
            <CardTitle className="CardText">Login</CardTitle>
          {this.state.error && <p>{this.state.error}</p>}
          <Form onSubmit={this.submitHandler}>
          
            {this.state.valerrors &&
              this.state.valerrors.email && (
                <p>{this.state.valerrors.email.msg}</p>
              )}
            <Input
              onChange={this.changeHandler}
              type="email"
              name="email"
              id="email"
            />{" "}
            <br />
            {this.state.valerrors &&
              this.state.valerrors.password && (
                <p>{this.state.valerrors.password.msg}</p>
              )}
            <Input
              onChange={this.changeHandler}
              type="password"
              name="password"
              id="password"
            />{" "}
            <br />
            <Button color="warning" type="submit">&nbsp;&nbsp;&nbsp; Login &nbsp;&nbsp;&nbsp;</Button>
            <CardText className="CardText">Do not you have account?</CardText>
          </Form>
          <br />
          </Card>
          </Col>
          </Row>
        </div>
      );
    }
  }
  
  export default Login;