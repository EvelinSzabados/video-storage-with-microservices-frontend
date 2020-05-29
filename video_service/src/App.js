import React, { useState, createContext, useEffect, useContext } from "react";
import { VideoContext } from "./context/VideoContext";
import ReactPlayer from "react-player"

import './App.css';

function App() {

  const { video, setVideo } = useContext(VideoContext);

  return (
    <React.Fragment>
      <header>
        <h1>Codecool video storage</h1>
      </header>
      <div className="main-wrapper">
        {video.map(data => (
          <div className="card">
            <p className="title">{data.name}</p>
            <p classNAme="url">
              <ReactPlayer
                url={data.url}
              />
            </p>
            <button className="detail-button">Details</button>
          </div>
        ))}

      </div>
    </React.Fragment>
  );
}

export default App;
