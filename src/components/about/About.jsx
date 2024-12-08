function About ({info}) {
    return (
        <div className="about">
            <h3>{info.title}</h3>
            <p>{info.body}</p>
        </div>
    )
}

export default About