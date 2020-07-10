import axios from "axios";

const SWAPI = "https://swapi.dev/api/";
let allFilms = [];
let charactersCount = 0;
let pagesLim = 0;

const formatResultStringsToIds = (arr, allEntries) => {
    return arr.reduce((accum, url) => {
        const newElement = allEntries.find((entry) => entry.url === url);
        if (newElement) {
            accum.push(newElement);
        }

        return accum;
    }, []);
};

async function getAllFilms() {
    const films = await (await axios.get(`${SWAPI}films/`)).data.results;

    return films;
}

const fetchFimsPage = async (nextPageUrl) => {
    const urlStr = nextPageUrl
        ? `${SWAPI}people/?page=${nextPageUrl}`
        : `${SWAPI}people/`;
    const res = await axios.get(urlStr);
    const data = res.data;

    return data;
};

const fetchAllCharactersData = async (pages) => {
    return Promise.all(pages.map((page) => fetchFimsPage(page))).then((data) =>
        data.map((obj) => obj.results)
    );
};

const fetchStarshipsPage = async (nextPageUrl) => {
    const urlStr = nextPageUrl
        ? `${SWAPI}starships/?page=${nextPageUrl}`
        : `${SWAPI}starships/`;
    const res = await axios.get(urlStr);
    const data = res.data;

    return data;
};

const fetchAllStarshipsData = async (pages) => {
    return Promise.all(
        pages.map((page) => fetchStarshipsPage(page))
    ).then((data) => data.map((obj) => obj.results));
};

const fetchPlanetsPage = async (nextPageUrl) => {
    const urlStr = nextPageUrl
        ? `${SWAPI}planets/?page=${nextPageUrl}`
        : `${SWAPI}planets/`;
    const res = await axios.get(urlStr);
    const data = res.data;

    return data;
};

const fetchAllPlanetsData = async (pages) => {
    return Promise.all(
        pages.map((page) => fetchPlanetsPage(page))
    ).then((data) => data.map((obj) => obj.results));
};

const fetchSpeciesPage = async (nextPageUrl) => {
    const urlStr = nextPageUrl
        ? `${SWAPI}species/?page=${nextPageUrl}`
        : `${SWAPI}species/`;
    const res = await axios.get(urlStr);
    const data = res.data;

    return data;
};

const fetchAllSpeciesData = async (pages) => {
    return Promise.all(
        pages.map((page) => fetchSpeciesPage(page))
    ).then((data) => data.map((obj) => obj.results));
};

const fetchVehiclesPage = async (nextPageUrl) => {
    const urlStr = nextPageUrl
        ? `${SWAPI}vehicles/?page=${nextPageUrl}`
        : `${SWAPI}vehicles/`;
    const res = await axios.get(urlStr);
    const data = res.data;

    return data;
};

const fetchAllVehiclesData = async (pages) => {
    return Promise.all(
        pages.map((page) => fetchVehiclesPage(page))
    ).then((data) => data.map((obj) => obj.results));
};

const createPaginationArr = (start, lim) => {
    let arr = [];
    for (start; start <= lim; start++) {
        arr.push(start);
    }

    return arr;
};

export async function init() {
    allFilms = await getAllFilms();

    const { count } = await fetchFimsPage();
    charactersCount = count;
    pagesLim = Math.ceil(count / 10);
    const characterPages = createPaginationArr(1, pagesLim);
    const ALL_CHARACTERS = await fetchAllCharactersData(characterPages);
    const finalChar = [];
    ALL_CHARACTERS.map((index) => index.map((obj) => finalChar.push(obj)));

    const ALL_STARSHIPS = await fetchAllStarshipsData([1, 2, 3, 4]);
    const finalShips = [];
    ALL_STARSHIPS.map((index) => index.map((obj) => finalShips.push(obj)));

    const ALL_PLANETS = await fetchAllPlanetsData([1, 2, 3, 4, 5, 6]);
    const finalPlanets = [];
    ALL_PLANETS.map((index) => index.map((obj) => finalPlanets.push(obj)));

    const ALL_SPECIES = await fetchAllSpeciesData([1, 2, 3, 4]);
    const finalSpecies = [];
    ALL_SPECIES.map((index) => index.map((obj) => finalSpecies.push(obj)));

    const ALL_VEHICLES = await fetchAllVehiclesData([1, 2, 3, 4]);
    const finalVehicles = [];
    ALL_VEHICLES.map((index) => index.map((obj) => finalVehicles.push(obj)));

    allFilms.map((film) => {
        film.characters = formatResultStringsToIds(film.characters, finalChar);
        film.starships = formatResultStringsToIds(film.starships, finalShips);
        film.planets = formatResultStringsToIds(film.planets, finalPlanets);
        film.species = formatResultStringsToIds(film.species, finalSpecies);
        film.vehicles = formatResultStringsToIds(film.vehicles, finalVehicles);

        return film;
    });

    return allFilms;
}

export const filmsObj = init().then((value) => value);
