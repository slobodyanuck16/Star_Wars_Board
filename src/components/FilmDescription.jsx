import React from "react";
import {
    useParams,
    Link,
    Switch,
    Route,
} from "react-router-dom";
import Characters from "./Characters";
import Planets from "./Planets";
import Species from "./Species";
import Starships from "./Starships";
import Vehicles from "./Vehicles";

const FilmDescription = ({ film }) => {
    const { episodeId } = useParams();

    const episNum = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
    }

    return (
        <>
            {film.map((filmInfo) => {
                return (
                    <div className="film-description" key={filmInfo.episode_id}>
                        <div className="film-description__title">
                            {`Episode ${episNum[`${filmInfo.episode_id}`]}: ${filmInfo.title}`}
                        </div>
                        <div className="film-description__description_container">
                            <div className="film-description__description">
                                {filmInfo.opening_crawl}
                            </div>
                        </div>
                        <div className="film-description__creators">
                            Directed by {filmInfo.director}, producers:{" "}
                            {filmInfo.producer}
                        </div>
                        <div className="film-description__release">
                            {filmInfo.release_date.substr(0, 4)}
                        </div>
                        <div className="film-description__buttons-container">
                            <Link
                                className="film-description__buttons-container_button"
                                to={`/${episodeId}/characters`}
                            >
                                characters
                            </Link>
                            <Link
                                className="film-description__buttons-container_button"
                                to={`/${episodeId}/planets`}
                            >
                                planets
                            </Link>
                            <Link
                                className="film-description__buttons-container_button"
                                to={`/${episodeId}/species`}
                            >
                                species
                            </Link>
                            <Link
                                className="film-description__buttons-container_button"
                                to={`/${episodeId}/starships`}
                            >
                                starships
                            </Link>
                            <Link
                                className="film-description__buttons-container_button"
                                to={`/${episodeId}/vehicles`}
                            >
                                vehicles
                            </Link>
                        </div>

                        <Switch>
                            <Route path={`/:episodeId/characters`}>
                                <Characters characters={filmInfo.characters} />
                            </Route>
                            <Route path={`/:episodeId/planets`}>
                                <Planets planets={filmInfo.planets} />
                            </Route>
                            <Route path={`/:episodeId/species`}>
                                <Species species={filmInfo.species} />
                            </Route>
                            <Route path={`/:episodeId/starships`}>
                                <Starships starships={filmInfo.starships} />
                            </Route>
                            <Route path={`/:episodeId/vehicles`}>
                                <Vehicles vehicles={filmInfo.vehicles} />
                            </Route>
                        </Switch>
                    </div>
                );
            })}
        </>
    );
};

export default FilmDescription;
