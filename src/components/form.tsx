import axios from "axios";
import { useState } from "react";


export default function Form(props: any) {
    const [title, setTitle] = useState('a');
    const [journal, setJournal] = useState('a');
    const setWriting = props.setWriting;

    function insertJournal() {
        console.log("did something")

        const data = {
            title: title,
            journal: journal
        }

        // axios.post('http://localhost:5000/add', data, {
        //     headers: {
        //         'Content-Type': 'application/json',  // Set the Content-Type to application/json
        //     }
        // })
        //     .then(response => {
        //         console.log('Success:', response.data);
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });
        console.log(title, journal)
        console.log(JSON.stringify(data))
        fetch("http://localhost:5000/add", {
            "method": "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log("success: ", data);
            })
            .catch((error) => {
                console.error("error: ", error);
            });
    }

    function handleSubmit(evt: any) {
        evt.preventDefault();
        console.log(title, journal)
        insertJournal();
        setTitle("a");
        setJournal("a");
        setWriting(false);
    }

    return (
        <div className="form">
            <h2 className="formBackIcon" onClick={() => setWriting(false)}><i className="bi bi-arrow-left-circle-fill"></i></h2>
            <h2 className="formStrTitle" >Title: </h2>
            <input className="formTitle" onChange={(e: any) => setTitle(e.target.value)}></input>

            <h2 className="formStr" >Thoughts: </h2>
            <textarea className="formInputBox" onChange={(e: any) => setJournal(e.target.value)}></textarea>

            <button className="formSubmit" onClick={handleSubmit}>Submit</button>
        </div >
    )
}