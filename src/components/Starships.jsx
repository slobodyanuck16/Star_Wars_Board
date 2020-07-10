import React from "react";

function Starships({ starships }) {
    return (
        <div className="characters-container">
            {starships
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((ship) => {
                    return (
                        <div key={ship.name} className="starships">
                            <div className="starships__name-container">
                                <div className="starships__name">
                                    {ship.name}
                                </div>
                            </div>
                            <div className="starships__description-container">
                                <div>MGLT: {ship.MGLT}</div>
                                <div>Cargo capacity: {ship.cargo_capacity}</div>
                                <div>Consumables: {ship.consumables}</div>
                                <div>
                                    Cost in credits: {ship.cost_in_credits}
                                </div>
                                <div>Crew: {ship.crew}</div>
                                <div>
                                    Hyperdrive rating: {ship.hyperdrive_rating}
                                </div>
                                <div>Length: {ship.length}</div>
                                <div>Manufacter: {ship.manufacturer}</div>
                                <div>
                                    Max atmosphering speed:{" "}
                                    {ship.max_atmosphering_speed}
                                </div>
                                <div>Model: {ship.model}</div>
                                <div>Passengers: {ship.passengers}</div>
                                <div>Starship class: {ship.starship_class}</div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Starships;
