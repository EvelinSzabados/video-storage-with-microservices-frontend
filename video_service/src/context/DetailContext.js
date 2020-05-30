import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const DetailContext = createContext();

export const DetailProvider = (props) => {
    const { id } = useParams();
    const url = "http://localhost:8762/videos/" + id;
    const [detail, setDetail] = useState([]);


    const fetchAllDetail = () => {

        axios(url, {
            method: 'GET',
        }).then((resp) => {
            setDetail(resp.data)
        })

    };

    useEffect(fetchAllDetail, []);

    return (
        <DetailContext.Provider value={{ detail, setDetail }}>
            {props.children}
        </DetailContext.Provider>
    );
};