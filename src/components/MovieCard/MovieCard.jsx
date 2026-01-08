import './MovieCard.scss'
import { Link } from 'react-router-dom'

export default function MovieCard({movi}){


    return(
        <>
        <Link style={{textDecoration: 'none'}} to={`/movie/${movi.id}`} state={{movie: movi}}>
        <div className="movie-card">
            <div className='info-field'>
            <img src={`https://image.tmdb.org/t/p/w500${movi?.poster_path}`} alt="Movie Image" /> 

            <div>{movi?.title}</div>
            </div>
        </div>
        </Link>
        </>
    )
}