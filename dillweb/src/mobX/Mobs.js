import React, {Component} from 'react';
import{extendObservable} from 'mobx';
import {observer} from 'mobx-react';

class Mobs extends Component{
    constructor(){
        super()
        extendObservable(
            this, {counter:0,})
    }

    onIncrement = () => {
        this.counter++;
    }

    onDecrement = () => {
        this.counter--;
    }

    render (){
        return(
            <div>
            <h1>Yo minna</h1>
            <h2>{this.counter}</h2>
            <button onClick={this.onIncrement} type="button"> Increment (+)</button>
            <button onClick={this.onDecrement} type="button"> Decrement (-)</button>
            </div>
        )
    }
}

export default observer (Mobs)