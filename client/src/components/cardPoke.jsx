import './CardPoke.css';
import ButtonForm from './ButtonForm';

const CardPoke = ({posts, loading}) => {
    const tamanioType = "divType";
    if(loading){
        return <h2>...Loading</h2>
    }
    return <>
        {
            posts.map(e =>
                <div className="CardPoke" key={e.num_order}>
                 <p># {e.num_order} {e.name}</p>
                 <div className="Contenedor-Poke">
                    <img src={e.image}/>
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
                                <p className="classType"> {f.name} </p>
                            )
                    } */}
                 <br/>
                 {/* <button onClick={()=> {console.log(e)}}>Aceptar</button> */}
                <ButtonForm props="Detalles" link={"/detalles/"+e.name}/>
                <br/>
                 </div>
            )
        }
    </>
}

export default CardPoke;