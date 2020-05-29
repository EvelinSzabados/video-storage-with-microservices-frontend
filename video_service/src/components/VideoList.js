import React, { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import ReactPlayer from "react-player"

export default function VideoList() {

    const { video } = useContext(VideoContext);
    return (
        <React.Fragment>
            <header>
                <h1>Codecool video storage</h1>
            </header>
            <div className="main-wrapper">
                {video.map(data => (
                    <div className="card">
                        <p className="title">{data.name}</p>
                        <p className="url">
                            <ReactPlayer
                                url={data.url}
                            />
                        </p>
                        <button className="detail-button">Details</button>
                    </div>
                ))}

            </div>
        </React.Fragment>
    )
}
