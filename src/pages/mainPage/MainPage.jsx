import React from "react";
import Title from "../../components/title/Title";
import About from "../../components/about/About";


function MainPage () {
    const aboutInfo = {
        title: "Some title",
        body: "Some body",
    };

    return (
        <div className="main-page">
            <h2> I am a MainPage</h2>
            <Title text="Hello world"/>
            <About info={aboutInfo}/>
        </div>
    )
}

export default MainPage;