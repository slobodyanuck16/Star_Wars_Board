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
                            <img
                                className="title"
                                src="https://fontmeme.com/permalink/200713/f912c2247aa61f0a42f1ae5f0eb11cc1.png"
                                alt="H1 Title"
                            />
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
