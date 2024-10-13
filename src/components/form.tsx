export default function Form(props: any) {
    return (
        <div className="form">
            <div className="formInputHeader">
                <h2 className="formBackIcon"><i className="bi bi-arrow-left-circle-fill"></i></h2>
                <h2 className="formStr">Title: </h2>
                <h2></h2>

            </div>
            <input className="formTitle"></input>

            <h2 className="formStr">Thoughts: </h2>
            <textarea className="formInputBox"></textarea>

            <button className="formSubmit">Submit</button>
        </div>
    )
}