const Joke = (props) => {
    return (
        <div>
            <h2>{props.setup}</h2>
            <p>{props.punch}</p>
        </div>
    )
}

export default Joke;