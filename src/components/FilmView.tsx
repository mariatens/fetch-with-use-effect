import { Film
 } from "../App"

export interface FilmViewProps{
    film: Film
}

 export function FilmView(props: FilmViewProps): JSX.Element {
    return(
            <>
            <div>
            <details>
            <summary key = {props.film.original_title}>{props.film.original_title}</summary>
            <h2 className = "films" key = {props.film.original_title}>{props.film.title}</h2>
             <ul className = "films"><b> Director:</b> {props.film.director}</ul>
             <ul className = "films"> <b>Release year: </b>{props.film.release_date}</ul>
             <ul className = "films"><b> Rotten tomatos score: </b>{props.film.rt_score}</ul>
            </details>
            <img className = "image" key = {props.film.original_title} src = {props.film.movie_banner}/>
            </div>
            </>
            )
    }