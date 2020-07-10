import React from "react";
import SearchFlightInput from "./flights/components/Search";
import FilmsBoard from "./flights/components/FilmsBoard";
import { Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { filmsObj } from "./flights/components/another";

function App() {
    const [films, setFilms] = useState();
    const [text, setText] = useState();

    useEffect(() => {
        filmsObj.then((value) => setFilms(value));
    }, []);

    const handleText = (e) => {
        const { value } = e.target;
        setText(value);
    };

    return (
        <>
            {films === undefined ? (
                ""
            ) : (
                <>
                    <div className="search-film-container">
                        <i className="swg swg-darthvader"></i>
                        <h1 className="title">Star Wars: The Complete Saga</h1>
                        <SearchFlightInput setText={handleText} />
                    </div>
                    {/* <Switch> */}
                        <Route exact path="/:direction">
                            <FilmsBoard text={text} films={films} />
                        </Route>
                        <Redirect to="/home" />
                    {/* </Switch> */}
                </>
            )}
        </>
    );
}

export default App;
