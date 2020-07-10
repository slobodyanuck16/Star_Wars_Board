import React from "react";
import Search from "./flights/components/Search";
import FilmsBoard from "./flights/components/FilmsBoard";
import { Switch, Route, Redirect, Link } from "react-router-dom";
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
            {films && (
                <>
                    <div className="search-film-container">
                        <Link to="/home">
                            <h1 className="title">
                                Star Wars: The Complete Saga
                            </h1>
                        </Link>
                        <Search setText={handleText} />
                    </div>
                    {/* <Switch> */}
                    <Route path="/:episodeId">
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
