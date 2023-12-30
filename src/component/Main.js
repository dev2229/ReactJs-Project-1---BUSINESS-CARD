import react from "react"
import emailLogo from "../images/Mail.png"
import linkedinLogo from "../images/linkedin.png"

export default function Main() {
    return (
        <div className="main--container">
            <h3 className="main--heading main--content">
                Business Card
            </h3>
            <h4 className="main--h4--one main--content">
                Frontend Developer
            </h4>
            <span className="main--span--two main--content">
                Website Link Channel
            </span>


            <div className="btn--class">
            <button className="main--btn btn--email">
                <img src={emailLogo} className="email" />Email
            </button>
            <button className="main--btn btn--linkedin">
                <img src={linkedinLogo} className="linkedin"/>LinkedIn
            </button>
            </div>


            <div className="main--about--interest">
                <h3>About</h3>
                <p>Hi i am Devansh Jadhav . I am a third year student at Rajiv Gandhi Institue Of Technology . I am frontend engineer at ENLIT MEDIA</p>
                <h3>Interests</h3>
                <p>Frontend Developer with a keen interest in creating engaging user interfaces. Enthusiastic about UX design, web technologies, and continuous learning. Actively contributing to open source and thriving in collaborative environments.</p>
            </div>

        </div>
    )
}