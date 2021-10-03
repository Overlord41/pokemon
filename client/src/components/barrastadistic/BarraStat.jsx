import './BarraStat.css';

const BarraStat = ({name, attack}) => {
    return (
        <tbody>
            <tr>
                <td>{name}:</td>
                <td>
                    <div className="bar att">
                        <div className="inner" style={{width: (attack / 100 * 100)}}>
                        </div>
                    </div>
                </td>
            <td> {attack}</td>
        </tr>
        <br/>
        </tbody>
    )
}

export default BarraStat
