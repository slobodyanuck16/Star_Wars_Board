import React from "react";
import Search from "./components/Search";
import FilmsBoard from "./components/FilmsBoard";
import { Route, Redirect, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { filmsObj } from "./components/gateways";

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
                    <Route path="/:episodeId">
                        <FilmsBoard text={text} films={films} />
                    </Route>
                    <Redirect to="/home" />
                </>
            )}
        </>
    );
}

export default App;
