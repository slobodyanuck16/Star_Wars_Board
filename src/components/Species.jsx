import React from "react";

function Species({ species }) {
    console.log(species);

    return (
        <div className="characters-container">
            {species
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((spec) => {
                    return (
                        <div key={spec.name} className="species">
                            <div className="species__name-container">
                                <div className="species__name">{spec.name}</div>
                            </div>
                            <div className="species__description-container">
                                <div>Average height: {spec.average_height}</div>
                                <div>
                                    Average lifespan: {spec.average_lifespan}
                                </div>
                                <div>Classification: {spec.classification}</div>
                                <div>Designation: {spec.designaition}</div>
                                <div>Eye colors: {spec.eye_colors}</div>
                                <div>Hair colors: {spec.hair_colors}</div>
                                <div>Homeworld: {spec.homeworld}</div>
                                <div>Language: {spec.landuage}</div>
                                <div>Skin colors: {spec.skin_colors}</div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Species;
