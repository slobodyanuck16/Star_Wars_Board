import React from "react";

function Vehicles({ vehicles }) {
    console.log(vehicles);

    return (
        <div className="characters-container">
            {vehicles
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((veh) => {
                    return (
                        <div key={veh.name} className="starships">
                            <div className="starships__name-container">
                                <div className="starships__name">
                                    {veh.name}
                                </div>
                            </div>
                            <div className="starships__description-container">
                                <div>MGLT: {veh.MGLT}</div>
                                <div>Cargo capacity: {veh.cargo_capacity}</div>
                                <div>Consumables: {veh.consumables}</div>
                                <div>
                                    Cost in credits: {veh.cost_in_credits}
                                </div>
                                <div>Crew: {veh.crew}</div>
                                <div>
                                    Hyperdrive rating: {veh.hyperdrive_rating}
                                </div>
                                <div>Length: {veh.length}</div>
                                <div>Manufacter: {veh.manufacturer}</div>
                                <div>
                                    Max atmosphering speed:{" "}
                                    {veh.max_atmosphering_speed}
                                </div>
                                <div>Model: {veh.model}</div>
                                <div>Passengers: {veh.passengers}</div>
                                <div>Starship class: {veh.starship_class}</div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Vehicles;
