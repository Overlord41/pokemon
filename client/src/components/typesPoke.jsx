import React, { Component } from "react";
import './navbar.css';

class TypePoke extends Component{
    render(){
        return (
            <div>
                <imd src={this.props.img} />
            </div>
        )
    }
}

export default TypePoke;