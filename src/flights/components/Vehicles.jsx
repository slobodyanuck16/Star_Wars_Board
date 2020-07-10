import React from "react";

function Vehicles({ vehicles }) {
    return (
        <>
            {vehicles.map((veh) => {
                return <div className="characters-container">{veh.name}</div>;
            })}
        </>
    );
}

export default Vehicles
