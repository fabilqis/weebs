import React from 'react';
import {Container, Row, Col} from 'reactstrap';

export default class Footer extends React.Component{
    render(){
        return(
        <div className="footers">
        <Container>
            <Row>
            <Col>
            </Col>
            <Col>
            <center>
            <div className="thefooter d-inline">
            <a href="https://www.facebook.com/fabilqis" target="_blank" rel="noopener norefferer">
            <img src={require('./facebook-logo.png')} alt="fb"/>
            </a>
            </div>

            <div className="thefooter d-inline">
            <a href="https://www.instagram.com/v_jo_anne" target="_blank" rel="noopener norefferer">
            <img src={require('./instagram.png')} alt="insta"/>
            </a>
            </div>

            <div className="thefooter d-inline">
            <a href="https://www.linkedin.com/in/fadillahbilqis/" target="_blank" rel="noopener norefferer">
            <img src={require('./linkedin-logo.png')} alt="linked"/>
            </a>
            </div>

            </center>
            </Col>
            <Col>
            </Col>
            </Row>
        </Container> 
        <p className="billy">Billy-2018</p>   
        </div>
        )
    }
}