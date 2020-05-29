import React, { useContext } from 'react'
import { DetailContext } from "../context/DetailContext";
import ReactPlayer from "react-player"
import { Link } from "react-router-dom";

export default function Detail() {

    const { detail, setDetail } = useContext(DetailContext);
    console.log(detail.recommendations)
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
                    <button className="detail-button">Details</button>
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
                        <select id="rating">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="4">5</option>
                        </select>
                        <p>Comment:</p>
                        <input className="comment-field" type="text"></input></p>
                    <input className="submit-button" type="submit"></input>
                </div>


            </div>
        </React.Fragment>
    )
}
