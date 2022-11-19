import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { filterFilms } from "./utils/filter";

export interface Film {
    id: string;
    title: string;
    original_title: string;
    original_title_romanised: string;
    image: string;
    movie_banner: string;
    description: string;
    director: string;
    producer: string;
    release_date: number;
    running_time: number;
    rt_score: number;
    people: string[];
    species: string[];
    locations: string[];
    vehicles: string[];
    url: string;
}

function App() {

  const [films, setFilms] = useState<Film[]>([]);
  const [inputText, setInputText] = useState("");
  const [watchedFilms, setWatchedFilms] = useState<Film[]>([]);
  const filteredFilms = filterFilms(inputText, films)

  useEffect(() => {
    const fetchFilm = async () => {
      const response = await fetch(
        "https://ghibliapi.herokuapp.com/films/"
      );
      const jsonBody= await response.json();
      setFilms(jsonBody);
    };

    fetchFilm();
  }, []);

  const saveTypedName = (typedName: string) => {
    setInputText(typedName);
  };
  
  return (
    <>
      <h1 className = "title">Studio Ghibli Films App</h1>
      <SearchBar value={inputText} onChange={saveTypedName} />
      <p className = "films">{filteredFilms.map((eachFilm: any)=> 
      (
      <>
      <div className = "image-position">
      <details>
      <summary key = {eachFilm.original_title}>{eachFilm.original_title}</summary>
      <h2 className = "films" key = {eachFilm.original_title}>{eachFilm.title}</h2>
       <ul className = "films"> Director: {eachFilm.director}</ul>
       <ul className = "films"> Release year: {eachFilm.release_date}</ul>
       <ul className = "films"> Rotten tomatos score: {eachFilm.rt_score}</ul>
      </details>
      <img className = "image" key = {eachFilm.original_title} src = {eachFilm.movie_banner}/>
      </div>
      </>
      )
      )}</p>
    </>
  );
}

export default App;

