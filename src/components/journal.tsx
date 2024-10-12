import './header.css'

export default function Journal(props: any) {
    const date = props.date ?? "9/11"//"9/11";
    const title = props.title ?? "Journal Entry";
    const entry = props.example ?? "Example of Journal Entry";

    return (
        <div className="journal">
            <h2 className='journalTitle'>{date} {title}</h2>
            <p className='sample'>{entry}</p>
            {/* <button className='button'>View Full Entry</button> */}
        </div>
    )
}