const photoCollage = "https://www.collinsdictionary.com/images/full/collage_405007918.jpg"

const Hero = () => {
    return (
        <section className="hero">
            <div className="photo-contain">
                <img className="collage" src={photoCollage}/>
            </div>
            <div className="experiance">
                <h1>Worldly Experiances</h1>
                <p>Our Hosts offer millions of unique homes around the world. Airbnb Categories organize them into curated collections, with over 50 categories of homes chosen for their style, location, or nearby activities.</p>
            </div>
        </section>
    )
}

export default Hero