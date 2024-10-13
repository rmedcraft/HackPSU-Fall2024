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
    const entry = props.example ?? "";

    // const navigate = useNavigate();

    return (
        <Link className="journal" to={'/journal1'}>
            <div>
                <h2 className='journalTitle'><span className='date'>{date}</span> {title}</h2>
                <p className='sample'>{entry}</p>
                {/* <button className='button'>View Full Entry</button> */}
            </div>
        </Link>
    )
}