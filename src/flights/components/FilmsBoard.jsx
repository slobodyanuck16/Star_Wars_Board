import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { filmsObj } from "./another";

import FilmDescription from "./FilmDescription";

function FilmsBoard({ text, films }) {
    const { episodeId } = useParams();

    const { location } = useLocation();

    console.log(location);

    console.log(episodeId);

    console.log(films);

    const checkedFilm =
        episodeId === "home"
            ? []
            : films.filter(
                  (fil) => fil.episode_id + "" === episodeId.substr(8)
              );

    const filteredfilms =
        text === undefined
            ? films
            : films.filter((film) =>
                  film.title.toLowerCase().includes(text.toLowerCase())
              );

    console.log(checkedFilm);

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
                        </Link>
                    );
                })}
            </div>
            {episodeId === "home" ? (
                ""
            ) : (
                <div className="film-card-container">
                    <FilmDescription film={checkedFilm} />
                </div>
            )}
        </>
    );
}

export default FilmsBoard;
