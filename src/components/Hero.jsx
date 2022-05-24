const photoCollage = "https://www.collinsdictionary.com/images/full/collage_405007918.jpg"

const Hero = () => {
    return (
        <section className="hero">
            <div className="photo-contain">
                <img className="collage" src={photoCollage}/>
            </div>
            <div className="experiance">
                <h1>Online Experiance</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
        </section>
    )
}

export default Hero