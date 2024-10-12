import { useState, useEffect } from "react"
import "./header.css"
import Journal from "./journal"
import axios from "axios"

export default function Journals() {
    const [data, setData] = useState({
        date: "",
        title: "",
        example: "",
    })

    useEffect(() => {
        console.log("what are you fetching?")
        fetch("/").then((res) => {
            // console.log(res.json())
            res.json().then((data) => {
                console.log("are you alive/???")
                setData({
                    date: data.date,
                    example: data.example,
                    title: data.title,
                })
                // setting the data from an API
            })
        })

        
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000");
                setData({
                    date: response.data.date,
                    title: response.data.title,
                    example: response.data.examples,
                })
            } catch (err) {
                console.error("failed to fetch data.");
            }
        }
        fetchData();
    }, [])

    return (
        <div className='journals'>
            <Journal date="9/12" title="WOW WE'RE CODING SOMTHING REALLY COOL!!!" example="EXAMPLE JOURNAL ENTRY!!!" />
            <Journal date={data.date} title={data.title} example={data.example} />
            <Journal />
            <Journal />
            <Journal />
            <Journal />
        </div>
    )
}