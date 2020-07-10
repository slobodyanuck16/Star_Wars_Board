import React from "react";
import SearchFlightInput from "./flights/components/Search";
import FilmsBoard from "./flights/components/FilmsBoard";
import { Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

    // const [film, setFilm] = useState();
    const [text, setText] = useState();

    // useEffect(() => {
    //     fetch("http://swapi.dev/api/films/")
    //         .then((response) => response.json())
    //         .then((data) => setFilm(data.results));
    // }, []);

    const handleText = (e) => {
        const {value} = e.target;
        setText(value)
    }

    return (
        <>
            <div className="search-film-container">
            <i className="swg swg-darthvader"></i>
                <h1 className="title">Star Wars: The Complete Saga</h1>
                <SearchFlightInput setText={handleText} />
            </div>
            <Switch>
                <Route exact path="/:direction">
                    <FilmsBoard text={text} />
                </Route>
                {/* <Redirect to="/home" /> */}
            </Switch>
        </>
    );
}

export default App;
