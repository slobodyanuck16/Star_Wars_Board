import React, { useState, useEffect } from "react";
import { useParams, Link, Switch, Route } from "react-router-dom";
import Characters from "./Characters";
import Planets from "./Planets";
import Species from "./Species";
import Starships from "./Starships";
import Vehicles from "./Vehicles";

const FilmDescription = ({ film }) => {
    console.log(film);

    const { direction } = useParams();

    console.log(direction);

    return (
        <>
            {film === undefined
                ? ""
                : film.map((film) => {
                      return (
                          <div key={film.episode_id}>
                              <div>{film.title}</div>
                              <div>{film.opening_crawl}</div>
                              <div>
                                  Directed by {film.director}, producer:{" "}
                                  {film.producer}
                              </div>
                              <div>{film.release_date}</div>
                              <Link to={`${direction}/characters`}>
                                  To characters
                              </Link>
                              <Link to={`${direction}/planets`}>
                                  To planets
                              </Link>
                              <Link to={`${direction}/species`}>
                                  To species
                              </Link>
                              <Link to={`${direction}/starships`}>
                                  To starships
                              </Link>
                              <Link to={`${direction}/vehicles`}>
                                  To vehicles
                              </Link>
                              <Switch>
                                  <Route path={`${direction}/characters`}>
                                      <Characters
                                          characters={film.characters}
                                      />
                                  </Route>
                                  <Route path={`${direction}/planets`}>
                                      <Planets planets={film.planets} />
                                  </Route>
                                  <Route path={`${direction}/species`}>
                                      <Species species={film.species} />
                                  </Route>
                                  <Route path={`${direction}/starships`}>
                                      <Starships starships={film.starships} />
                                  </Route>
                                  <Route path={`${direction}/vehicles`}>
                                      <Vehicles vehicles={film.vehicles} />
                                  </Route>
                              </Switch>
                          </div>
                      );
                  })}
        </>
    );
};

export default FilmDescription;
