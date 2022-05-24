const place1 = "https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWlyJTIwYm5ifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"

const Card = () => {
    return (
        <div className="card">
            <img src={place1} className="cardImg"/>
            <div className="card-stats">
                <span>5.0</span>
                <span>6</span>
                <span>USA</span>
            </div>
            <p>Check this place out</p>
            <p>From $350 / night</p>
        </div>
    )
}

export default Card