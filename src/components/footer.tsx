import { useState } from "react"
import "./header.css"
import Form from "./form"

export default function Footer() {
    const [writing, setWriting] = useState(false)

    function handleClick() {
        setWriting(writing => !writing);
    }

    return (
        <>
            {writing && <Form />}
            <div className="footer" onClick={handleClick}>
                <h2 className="newJournal" ><i className="bi bi-pencil"></i></h2>
            </div>
        </>
    )
}