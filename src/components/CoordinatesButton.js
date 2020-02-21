// Code CoordinatesButton Component Here
// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component{



    handleClick = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
      };

    render(){
        console.log(this)
        return(

        <button onClick ={this.handleClick}> click</button>




        )







    }








}