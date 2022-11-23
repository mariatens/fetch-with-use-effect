import { Film
 } from "../App"

export interface FilmViewProps{
    film: Film
}

 export function FilmView(props: FilmViewProps): JSX.Element {
    return(
            <div className = "film">
            <details>
            <summary key = {props.film.id}>{props.film.original_title}</summary>
            <h2 key = {props.film.id}>{props.film.title}</h2>
             <ul><b> Director:</b> {props.film.director}</ul>
             <ul> <b>Release year: </b>{props.film.release_date}</ul>
             <ul><b> Rotten tomatos score: </b>{props.film.rt_score}</ul>
            </details>
            <img className = "image" key = {props.film.id} src = {props.film.movie_banner}/>
            </div>
            )
    }