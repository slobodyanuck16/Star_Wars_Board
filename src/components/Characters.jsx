import React from "react";

function Characters({ characters }) {
    return (
        <div className="characters-container">
            {characters
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((char) => {
                    return (
                        <div key={char.name} className="characters">
                            <div className="characters__name-container">
                                <div className="characters__name">
                                    {char.name}
                                </div>
                            </div>
                            <div className="characters__description-container">
                                <div>Birth year: {char.birth_year}</div>
                                <div>Eye color: {char.eye_color}</div>
                                <div>Gender: {char.gender}</div>
                                <div>Hair color: {char.hair_color}</div>
                                <div>Height: {char.height}</div>
                                <div>Mass: {char.mass}</div>
                                <div>Skin color: {char.skin_color}</div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Characters;
