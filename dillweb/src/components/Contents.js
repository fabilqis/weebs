import React from 'react';
import Home from '../pages/Home'
import Contacts from '../pages/Contacts'
import Why from '../pages/Why'

import {BrowserRouter, Switch, Route} from 'react-router-dom'


export default class Contents extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
            <Route path='/contact' component={Contacts} />
            <Route path='/whyme' component={Why}/>
            <Route exact path='/' component={Home}/>
            </Switch>
            </BrowserRouter>

        )
    }
}