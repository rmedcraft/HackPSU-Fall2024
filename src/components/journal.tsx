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

    function cutoff(text: string, amount: number) {
        if (text.length < amount) {
            return text
        }
        return text.substring(0, amount) + "..."
    }
    // const scores = props.scores ?? [0, 0, 0, 0, 0, 0]

    // const navigate = useNavigate();

    const prop = {
        title: props.title,
        score: props.score,
        label: props.label,
        text: props.text
    }

    return (
        <Link className="journal" to={'/journalPage'} state={{ title: prop }} >
            <div>
                <h2 className='journalTitle'><span className='date'>{date}</span> {cutoff(title, 20)}</h2>
                <p className='sample'>{cutoff(entry, 50)}</p>
                {/* <button className='button'>View Full Entry</button> */}
            </div>
        </Link>
    )
}