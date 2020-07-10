import React from "react";
import axios from "axios";

function Characters({ characters }) {
    async function fetchData(link) {
        const info = await (await axios.get(link)).data.results;
        return info;
    }

    // console.log(fetchData("http://swapi.dev/api/films/1/"));

    console.log(characters);
    return (
        <div className="characters-container">
            {characters
                .sort((a, b) => a.name > b.name ? 1 : -1)
                .map((char) => {
                    return (
                        <div key={char.name} className="characters">
                            {char.name}
                            <div>Birth year: {char.birth_year}</div>
                            <div>Eye color: {char.eye_color}</div>
                            <div>Gender: {char.gender}</div>
                            <div>Hair color: {char.hair_color}</div>
                            <div>Height: {char.height}</div>
                            <div>Mass: {char.mass}</div>
                            <div>Skin color: {char.skin_color}</div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Characters;
