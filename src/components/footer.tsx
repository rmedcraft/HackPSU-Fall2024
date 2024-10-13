import { useState } from "react"
import "./header.css"
import Form from "./form"

export default function Footer(props: any) {
    const [writing, setWriting] = useState(false)

    function handleClick() {
        setWriting(writing => !writing);
    }

    return (
        <>
            {writing && <Form writing={writing} setWriting={setWriting} />}
            <div className="footer" onClick={handleClick}>
                <h2 className="newJournal" ><i className="bi bi-pencil"></i></h2>
            </div>
        </>
    )
}