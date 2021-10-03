import BarraStat from './barrastadistic/BarraStat';
import ButtonForm from './ButtonForm';
import './CardDetalle.css';

const CardDetalle = (data) => {
    return (
            <div className="FoundPoke">
                {
                data.data.map(e=>
                    <div className="CardPokeInfo">
                        <p># {e.num_order} {e.name}</p>
                        <div className="Contenedor-Pokemon">
                            <img src={e.image}/>
                        </div>
                        <br/>
                        <BarraStat name={"Vida"} attack={e.hp}/>
                        <BarraStat name={"Ataque"} attack={e.attack}/>
                        <BarraStat name={"Defensa"} attack={e.defense}/>
                        <br/>
                        <div className="statsNormales">
                            <p>Tamaño: {e.height/10} m </p>
                            <p>Peso: {e.weight/10} kg</p>
                            <p>Velocidad: {e.speed}  </p>
                        </div>
                        <br/>
                        <div className="contain_tipos">
                            {
                                e.tipos.map(f =>
                                    <div className={f.name + " tamanioType"} title={f.name} key={f.name}></div>
                                )
                            }
                        </div>
                        {/* {
                                e.tipos.map(f =>
                                    {
                                        if(e.tipos.length > 1) {
                                            return (<p className="classType"> {f.name} - </p>)
                                        }else{
                                            return (<p className="classType"> {f.name}</p>)
                                        }
                                    }
                                )
                        } */}
                        <br/>
                        <ButtonForm props="Regresar" link={"/pokemons/ASC"}/>
                        <br/>
                    </div>
                )
            }
            </div>
        )
}

export default CardDetalle