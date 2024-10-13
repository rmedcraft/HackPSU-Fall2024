import './header.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";

export default function Journal(props: any) {
    const date = props.date ?? ""
    const title = props.title ?? "";
    const entry = props.text ?? "";
    // const scores = props.scores ?? [0, 0, 0, 0, 0, 0]

    // const navigate = useNavigate();

    const prop = {
        title: props.title,
        score: props.score,
        label: props.label
    }

    return (
        <Link className="journal" to={'/journalPage'} state={{ title: prop }} >
            <div>
                <h2 className='journalTitle'><span className='date'>{date}</span> {title}</h2>
                <p className='sample'>{entry}</p>
                {/* <button className='button'>View Full Entry</button> */}
            </div>
        </Link>
    )
}