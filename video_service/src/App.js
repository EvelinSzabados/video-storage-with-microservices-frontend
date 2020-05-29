import React from "react";
import VideoList from "./components/VideoList";
import Detail from "./components/Detail";
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { DetailProvider } from "./context/DetailContext";

function App() {

  return (

    <BrowserRouter>

      <Route exact path="/">
        <VideoList />
      </Route>
      <Route path="/details/:id">
        <DetailProvider>
          <Detail />
        </DetailProvider>
      </Route>

    </BrowserRouter>
  );
}

export default App;
