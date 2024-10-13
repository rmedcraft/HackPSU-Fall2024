import "./header.css"

export default function Header(props: any) {
    return (
        <>
            <div className="header">
                <h2 className="icon"><i className="bi bi-justify"></i></h2>
                <h1 className="title">{props.title}</h1>
                <h2 className="icon"><i className="bi bi-person-circle"></i></h2>
            </div>
        </>
    )
}