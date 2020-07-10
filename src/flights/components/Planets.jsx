import React from "react";

function Planets({ planets }) {
    console.log(planets);
    
    return (
        <>
            {planets.map((planet) => {
                return (
                    <div className="planets-container">{planet.name}</div>
                );
            })}
        </>
    );
}

export default Planets;
