import React from "react";

function Starships({ starships }) {
    return (
        <>
            {starships.map((ship) => {
                return <div className="characters-container">{ship.name}</div>;
            })}
        </>
    );
}

export default Starships
