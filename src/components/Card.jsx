
const Card = (props) => {
    console.log(props)
    return (
        <div className="card">
            {props.data.openSpots === 0 && <div className="card-badge">Sold Out</div>}
            <img src={props.data.url} alt={props.data.alt} className="cardImg"/>
            <div className="card-stats">
                <img className="star" src={props.star}/>
                <span>{props.data.stats.rating}</span>
                <span className="gray">({props.data.stats.raters}) -</span>
                <span className="gray">{props.data.location}</span>
            </div>
            <h3>{props.data.title}</h3>
            <p><strong>From ${props.data.price}</strong> / night</p>
        </div>
    )
}

export default Card