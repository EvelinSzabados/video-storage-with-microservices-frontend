import React, { useContext, useState } from 'react'
import { DetailContext } from "../context/DetailContext";
import ReactPlayer from "react-player"
import { Link } from "react-router-dom";
import Axios from "axios";

export default function Detail() {

    const { detail, setDetail } = useContext(DetailContext);
    const [message, setMessage] = useState("");
    const [popUp, setPopUp] = useState("")
    const [rate, setRate] = useState("");


    const add = () => {
        console.log(rate)
        console.log(message)
        if (message !== "" && rate !== "") {


            Axios.post(
                "http://localhost:8081/videos/add",
                {
                    "comment": message,
                    "rating": rate,
                    "videoId": detail.id
                }
            ).then(res => {
                setPopUp("Thanks for your feedback!")
                setTimeout(() => { setPopUp("") }, 1500)

                setMessage("");
                setRate("")


            }).catch(() => {
                setPopUp("Try again!")
            });
        } else {
            setPopUp("Try again!")
        }

    };
    return (
        <React.Fragment>
            <header>
                <h1>Codecool video storage</h1>
            </header>
            <div className="main-wrapper">

                <div className="card">
                    <p className="title">{detail.name}</p>
                    <p className="url">
                        <ReactPlayer
                            url={detail.url}
                        />
                    </p>

                    <p style={{ margin: "2rem 0" }}><Link to={"/"}
                        style={{ textDecoration: 'none', color: 'crimson', border: 'none' }}> {'<<Back'}</Link></p>
                </div>
                <div className="card">
                    <h1>Recommendations:</h1>
                    {detail.recommendations == null ? "" : detail.recommendations.map(rec => (
                        <div className="recommendation-box">
                            <p><span>Rating:</span> {rec.rating}</p>
                            <p><span>Comment:</span> {rec.comment}</p>

                        </div>

                    ))}
                    <p>
                        <h1>Write new recommendation:</h1>
                        <p>Rate:</p>
                        <select id="rating" name="rate"
                            onChange={(e) => { setRate(e.target.value) }}>
                            <option value="" selected disabled hidden>Please rate</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <p>Comment:</p>
                        <input className="comment-field" type="text"
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }} ></input></p>
                    <p>{popUp}</p>
                    <input className="submit-button" type="submit" onClick={add}></input>

                </div>


            </div>
        </React.Fragment>
    )
}
