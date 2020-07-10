import React from "react";

function Species({ species }) {
    return (
        <>
            {species.map((spec) => {
                return <div className="characters-container">{spec.name}</div>;
            })}
        </>
    );
}

export default Species
