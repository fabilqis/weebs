import React from 'react';
import Carousels from '../components/Carousels'
import Maincontent from '../components/Maincontent'


export default class Home extends React.Component{
    render(){
        return(
            <div>
            <div>
            <Carousels/>
            </div>
            <div>
            <Maincontent/>
            </div>
            </div>
        )
    }
}