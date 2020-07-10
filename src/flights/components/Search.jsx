import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Search({ setText }) {
    return (
        <div className="search-film-container">
            <input
                type="text"
                className="search-flights__input"
                placeholder="ENTER EPISODE NAME"
                // value={event.target.value}
                onChange={(event) => setText(event)}
            />
        </div>
    );
}

export default Search;
