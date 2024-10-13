import { useState, useEffect } from "react"
import "./header.css"
import Journal from "./journal"
import axios from "axios"

type journalData = {
    data: string,
    title: string,
    example: string,
}

export default function Journals() {
    const [data, setData] = useState({
        date: "",
        title: "",
        example: "",
    })

    const [journals, setJournals] = useState([{
        date: "",
        title: "",
        example: ""
    }])

    // fetches the journal data from our server
    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:5000/data")
        // console.log(response.data)
        // setData({
        //     date: response.data.date,
        //     title: response.data.title,
        //     example: response.data.example,
        // })
        setJournals(response.data)
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <div className='journals'>
            {/* <Journal date="9/12" title="WOW WE'RE CODING SOMTHING REALLY COOL!!!" example="EXAMPLE JOURNAL ENTRY!!!" />
            <Journal date={data.date} title={data.title} example={data.example} />
            <Journal />
            <Journal />
            <Journal />
            <Journal /> */}
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