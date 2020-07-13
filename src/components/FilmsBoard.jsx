import React from "react";
import { Link, useParams } from "react-router-dom";
import FilmDescription from "./FilmDescription";

function FilmsBoard({ text, films }) {
    const episodeImg = {
        1: "https://upload.wikimedia.org/wikipedia/ru/4/40/Star_Wars_Phantom_Menace_poster.jpg",
        2: "https://upload.wikimedia.org/wikipedia/ru/a/ad/Star_Wars_Attack_of_the_Clones_poster.jpg",
        3: "https://images-na.ssl-images-amazon.com/images/I/61ZDSUH2iiL._AC_SY879_.jpg",
        4: "https://www.scriptslug.com/assets/uploads/posters/_540xAUTO_crop_center-center_75_none/star-wars-episode-iv-a-new-hope-1977.jpg",
        5: "https://i.pinimg.com/736x/fa/73/1d/fa731d5386e9cf67a465cfdeb63daf9c.jpg",
        6: "https://www.scriptslug.com/assets/uploads/posters/_540xAUTO_crop_center-center_75_none/star-wars-episode-vi-return-of-the-jedi-1983.jpg",
    };

    const { episodeId } = useParams();

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
                  film.title.toLowerCase().includes(text.toLowerCase()) || (film.episode_id + '').includes(text)
              );

    return (
        <>
            <div className="films-list-container">
                {filteredfilms.map((film) => {
                    return (
                        <Link
                            key={film.episode_id}
                            className="film-card"
                            to={`/episode-${film.episode_id}`}
                        >
                            <img
                                className="film-card-poster"
                                src={`${episodeImg[`${film.episode_id}`]}`}
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
