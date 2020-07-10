import React from "react";

function Characters({ characters }) {
    return (
        <>
            {characters.map((char) => {
                return <div className="characters">{char.name}</div>;
            })}
        </>
    );
}

export default Characters
