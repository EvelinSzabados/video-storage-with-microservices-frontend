import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const VideoContext = createContext();

export const VideoProvider = (props) => {
    const url = "http://localhost:8081/videos/all";
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