import { useEffect, useState } from "react";

interface Film {
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

  const [films, setFilms] = useState<any[]>([]);

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

  return (
    <>
      <h1>Film App</h1>
      <p>{films.map((eachFilm: any)=> 
      (
      <>
      <p key = {eachFilm.title}>{eachFilm.title}</p>
      <img src = {eachFilm.image}/>
      </>
      )
      )}</p>
    </>
  );
}

export default App;
