import { Link } from "react-router-dom"
import Header from "../components/header"
import "../index.css"
import "./pages.css"

export default function JournalPage(props: any) {
    return (<div>
        <Header />
        <div className="backAndThoughts">
            <Link to={"/"}>
                <h2 className="backIcon">
                    <i className="bi bi-arrow-left-circle-fill"></i>
                </h2>
            </Link>
            <h2 className="titleThing">Thoughts: </h2>
            <h2></h2> {/**this is just so you can center them */}
        </div>
        <textarea className="textInput"></textarea>
        <h2 className="titleThing">Analytics: </h2>
        <div className="graph"></div>
    </div>)
}