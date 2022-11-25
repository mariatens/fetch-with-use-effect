import { Film } from "../App";

export function filterFilms(inputText: string, filmData: Film[]) {
  return filmData.filter((film) =>
    film.title.toLowerCase().includes(inputText.toLowerCase())
  );
}
