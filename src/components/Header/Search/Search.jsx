import { useEffect, useState } from 'react'
import './Search.scss'
import { Link } from 'react-router-dom'

export default function Search(){
    const [dropMovie, setDropMovie] = useState([])
    const [search, setSearch] = useState('')

    const url = `https://api.themoviedb.org/3/search/movie?query=${search}`
    const options = {
        method: "GET",
        headers: {accept: 'application/json',  
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTZiZGZhOGQ4ZmU4ZGZjNjBkNzA3MzgwNWE0ZGZjNyIsIm5iZiI6MTc2NzI3MDg2Ni45OSwic3ViIjoiNjk1NjY5ZDI0NWRkNDgwMzU0Y2M4NjQ0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.J74uaHW3Gg6IoUUvTGZJRRqW-ztrxL-3tynlkmH3fpY'}
    }

    async function dropdownData(){
        const response = await fetch(url, options)
        const movie = await response.json()
        setDropMovie(movie.results.slice(0, 3))
    }

    useEffect(() => {
        dropdownData()
    }, [search])
    console.log( dropMovie)

    function handleChange(event){
        setSearch(event.target.value)
    }

    return(
        <>
         <div className='search-block'>
         <img src="../img/search-logo.svg"  alt="search" /> 
          <input  type="text" placeholder='Search..' value={search} onChange={handleChange}/>
          <div className={search ? 'search-dropdown' : ''}>
            <div className='dropdown'>
                <ul>
                    {dropMovie.filter(movi => movi.title.toLowerCase().includes(search.toLocaleLowerCase())).map((movi) => (
                        <Link style={{textDecoration: 'none'}} to={`/movie/${movi.id}`}>
                        <li key={movi.id} onClick={() => setSearch("")}>
                            <img src={`https://image.tmdb.org/t/p/w500${movi?.poster_path}`} alt="" />
                            <span>{movi.title}</span>
                        </li>
                        </Link>
                    ))}
                </ul>
            </div>
          </div>
          </div>
        </>
    )
}