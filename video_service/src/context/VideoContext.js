import React, { useState, createContext, useEffect, useContext } from "react";
import { DetailContext } from "./DetailContext";
import axios from "axios";


export const VideoContext = createContext();

export const VideoProvider = (props) => {
    const url = "http://localhost:8762/videos/all";
    const [video, setVideo] = useState([]);


    const fetchAllVideos = () => {

        axios(url, {
            method: 'GET',
        }).then((resp) => { setVideo(resp.data) })

    };

    useEffect(fetchAllVideos, []);

    return (
        <VideoContext.Provider value={{ video, setVideo }}>
            {props.children}
        </VideoContext.Provider>
    );
};