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
            {film.map((filmInfo) => {
                      return (
                          <div key={filmInfo.episode_id}>
                              <div>{filmInfo.title}</div>
                              <div>{filmInfo.opening_crawl}</div>
                              <div>
                                  Directed by {filmInfo.director}, producer:{" "}
                                  {filmInfo.producer}
                              </div>
                              <div>{filmInfo.release_date}</div>
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
                                          characters={filmInfo.characters}
                                      />
                                  </Route>
                                  <Route path={`${direction}/planets`}>
                                      <Planets planets={filmInfo.planets} />
                                  </Route>
                                  <Route path={`${direction}/species`}>
                                      <Species species={filmInfo.species} />
                                  </Route>
                                  <Route path={`${direction}/starships`}>
                                      <Starships starships={filmInfo.starships} />
                                  </Route>
                                  <Route path={`${direction}/vehicles`}>
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
