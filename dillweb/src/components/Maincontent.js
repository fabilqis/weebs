import React from 'react';
import {Container, Row, Col} from 'reactstrap';
 

export default class Maincontent extends React.Component{
    render(){
        return(
            <div className ="mycontainer">
            <Container >
            <Row className ="myrow">
                <Col xl="6">
                <p className="mymain">Discover a new things in this world</p>
                </Col>
                <Col xl="6">
                <img className="myimg" src={require('./1.jpeg')} alt={1}/>
                </Col>
            </Row>
            <Row className ="myrow">
                <Col xl="6">
                <img className="myimg1" src={require('./2.jpeg')} alt={2}/> 
                </Col>
                <Col xl="6">
                <p className="mymain">Dive more deeper, and take a breath</p>
                </Col>
            </Row>
            <Row className ="myrow">
                <Col xl="6">
                <p className="mymain">Because, there is nothing impossible</p>
                </Col>
                <Col xl="6">
                <img className="myimg" src={require('./3.jpeg')} alt={3}/>
                </Col>
            </Row>
            <Row className ="myrow">
                <Col xl="6">
                <img className="myimg1" src={require('./4.jpg')} alt={4}/> 
                </Col>
                <Col xl="6">
                <p className="mymain">When we are.. still alive</p>
                </Col>
            </Row>
            </Container>
            </div>
        )
    }
}
