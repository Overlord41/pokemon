import React, { Component } from "react";
import CardPoke from "./cardPoke";


class ContainPoke extends Component{
    render(){
        return (
            // {dataPokemon.data.map(e=>{
            //     console.log(e.name);
            // })}
            // <CardPoke img={} name={}/>
            <div>
                <img src={this.props.img} alt="_blank"/>
                <h3>{this.props.name}</h3>
                {/* <ButtonForm/> */}
            </div>
        )
    }
}

export default ContainPoke;