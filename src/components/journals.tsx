import { useState, useEffect } from "react"
import "./header.css"
import Journal from "./journal"
import axios from "axios"
// import { HashRouter as Router, Routes, Route } from "react-router-dom"

export default function Journals() {
    const [journals, setJournals] = useState([{
        date: "",
        title: "",
        example: ""
    }])

    // fetches the journal data from our server
    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:5000/data")
        setJournals(response.data)
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <div className='journals'>
            {/**instead of using the index as the key, we should use a URL or something that flask generates */}
            {journals.map((journal, index) => <Journal
                key={index}
                date={journal.date}
                title={journal.title}
                example={journal.example} />
            )}

        </div>
    )
}

