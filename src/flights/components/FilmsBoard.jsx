import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { filmsObj } from "./another";

import FilmDescription from "./FilmDescription";

function FilmsBoard({ text }) {
    const { direction } = useParams();

    const [films, setFilms] = useState([]);

    const checkedFilm =
        films === undefined
            ? []
            : films.filter(
                  (film) => film.episode_id + "" === direction.substr(8)
              );

    useEffect(() => {
        filmsObj.then((value) => setFilms(value));
    }, []);

    // filmsObj.then((value) => setFilms(value));

    const filteredfilms =
        text === ''
            ? films
            : films.filter((film) =>
                  film.title.toLowerCase().includes(text.toLowerCase())
              );

    return (
        <>
            <div className="films-list-container">
                {filteredfilms.map((film) => {
                    return (
                        <Link
                            key={film.episode_id}
                            className="film-card"
                            to={`episode-${film.episode_id}`}
                        >
                            <img
                                className="film-card-poster"
                                src={`../img/${film.episode_id}.jpg`}
                                alt="poster"
                            />
                            {/* <button className="some">{film.title}</button> */}
                        </Link>
                    );
                })}
            </div>
            <div className="film-card-container">
                <FilmDescription film={checkedFilm} />
            </div>
        </>
    );
}

export default FilmsBoard;
