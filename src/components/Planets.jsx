import React from "react";

function Planets({ planets }) {
    console.log(planets);

    return (
        <div className="planets-container">
            {planets
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((planet) => {
                    return (
                        <div key={planet.name} className="planets">
                            <div className="planets__name-container">
                                <div className="planets__name">
                                    {planet.name}
                                </div>
                            </div>
                            <div className="planets__description-container">
                                <div>Climate: {planet.climate}</div>
                                <div>Diameter: {planet.diameter}</div>
                                <div>Gravity: {planet.gravity}</div>
                                <div>
                                    Orbital period: {planet.orbital_period}
                                </div>
                                <div>
                                    Rotation period: {planet.rotation_period}
                                </div>
                                <div>Surface water: {planet.surface_water}</div>
                                <div>Terrain: {planet.terrain}</div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Planets;
