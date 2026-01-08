import '/src/pages/HomePage/HomePage.scss'
import LoginedHeader from "../../components/LoginedHeader/LoginedHeader"
import MovieCard from '../../components/MovieCard/MovieCard'
import { useEffect, useState} from 'react'

export default function HomePage(){
    const [movies, setMovies] = useState([])

     const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
        const options = {
        method: "GET",
        headers: {accept: 'application/json',  
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTZiZGZhOGQ4ZmU4ZGZjNjBkNzA3MzgwNWE0ZGZjNyIsIm5iZiI6MTc2NzI3MDg2Ni45OSwic3ViIjoiNjk1NjY5ZDI0NWRkNDgwMzU0Y2M4NjQ0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.J74uaHW3Gg6IoUUvTGZJRRqW-ztrxL-3tynlkmH3fpY'}
    }
        async function MovieData() {
            const response = await fetch(url, options)
            const movie = await response.json()
            setMovies(movie.results.slice(0, 8))
        }
    
        useEffect(() =>{
            MovieData()
        }, [])
        console.log(movies)
    return(
        <>
            <LoginedHeader/>
        <div className='home-container'>
        <div className="home-section">
            <div className='funny-category'>
                <h2>News</h2>
                <div  className='movies-container'>
                   {movies.map((movi) => (
                    <MovieCard key={movi.id} movi={movi}/>
                   ))}
                </div>
            </div>
            
            <div className='romantic-category'>
                <h2>Romantic</h2>
                <div className='movies-container'>
                    {movies.slice(0, 8).map((movi) => {
                        return <MovieCard key={movi.id} movi={movi}/>
                    })}
                </div>
            </div>
        </div>
        </div>
        </>
    )
}