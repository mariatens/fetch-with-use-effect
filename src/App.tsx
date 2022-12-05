import { useEffect, useState } from "react";
import { FilmView } from "./components/FilmView";
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
  const filteredFilms = filterFilms(inputText, films);
  const orderFilmsbyRTS = () => {
    setFilms(filteredFilms.sort((a, b) => b.rt_score-a.rt_score))
  }

  useEffect(() => {
    const fetchFilm = async () => {
      const response = await fetch("https://studio-ghibli-api-films.onrender.com/films");
      const jsonBody = await response.json();
      setFilms(jsonBody);
    };

    fetchFilm();
  }, []);

  const saveTypedName = (typedName: string) => {
    setInputText(typedName);
  };

  return (
    <>
      <h1 className="title">Studio Ghibli Films</h1>
      <div className = "searchBar">
      <SearchBar value={inputText} onChange={saveTypedName} />
      </div>
      {/* <button onClick = {()=>orderFilmsbyRTS()}>Sort by Rotten Tomato score</button> */}
      <div className="all-films">
        {filteredFilms.map((film) => (
          <FilmView film={film} />
        ))}
      </div>
    </>
  );
}

export default App;
