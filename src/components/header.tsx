import { useState } from "react"
import "./header.css"

export default function Header(props: any) {
    const [showUsers, setShowUsers] = useState(false)

    function userHandler() {
        setShowUsers(showUsers => !showUsers)
    }

    return (
        <>
            <div className="header">
                {/* {showUsers && <Users />} */}
                <h2 className="icon" onClick={userHandler}><i className="bi bi-justify"></i></h2>
                <h1 className="title">{props.title}</h1>
                <h2 className="icon"><i className="bi bi-person-circle"></i></h2>
            </div>
        </>
    )
}