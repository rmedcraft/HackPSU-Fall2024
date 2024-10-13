import { Link, useLocation } from "react-router-dom"
import Header from "../components/header"
import "../index.css"
import "./pages.css"
import { useState } from "react"

export default function JournalPage() {
    const location = useLocation()

    const { title } = location.state || {};

    const score = title.score * 100;

    const [journal, setJournal] = useState('a');


    function insertJournal() {
        console.log("did something")

        const data = {
            title: title,
            journal: journal
        }

        // axios.post('http://localhost:5000/add', data, {
        //     headers: {
        //         'Content-Type': 'application/json',  // Set the Content-Type to application/json
        //     }
        // })
        //     .then(response => {
        //         console.log('Success:', response.data);
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });
        console.log(title, journal)
        console.log(JSON.stringify(data))
        fetch("http://localhost:5000/edit", {
            "method": "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log("success: ", data);
            })
            .catch((error) => {
                console.error("error: ", error);
            });
    }

    function handleSubmit(evt: any) {
        evt.preventDefault();
        console.log(title, journal)
        insertJournal();
    }

    return (<div>
        <Header title={title.title} />
        <div className="backAndThoughts">
            <Link to={"/"}>
                <h2 className="backIcon">
                    <i className="bi bi-arrow-left-circle-fill"></i>
                </h2>
            </Link>
            <h2 className="titleThing">Thoughts: </h2>
            <h2></h2> {/**this is just so you can center them */}
        </div>
        <textarea className="textInput" value={title.text} onChange={(e: any) => setJournal(e.target.value)}></textarea>
        <button className="analyze" onClick={handleSubmit}>Analyze</button>
        <h2 className="titleThing">Analytics: </h2>
        <h3 className="output">{title.label} {score}%</h3>
    </div>)
}