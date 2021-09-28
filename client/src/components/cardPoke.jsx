import React, { Component } from "react";
import ButtonForm from './buttonForm.jsx';

class CardPoke extends Component{
    render(){
        return (
            <div>
                <div>Buscando...</div>
                <div>Pikachu</div>
                <div>
                    <img src={this.props.img} alt="_blank"/>
                    <h3>{this.props.name}</h3>
                    <ButtonForm/>
                </div>
                <div>Error</div>
            </div>
        )
    }
}

export default CardPoke;