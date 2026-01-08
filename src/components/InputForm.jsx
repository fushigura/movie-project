import { useEffect, useState } from "react"

export default function InputForm(props){
    const [val, setVal] = useState('')
    const [text, setText] = useState('')
    const [movie, setMovie] = useState([])
    const [selectId, setSelectId] = useState('')
    const [find, setFind] = useState('')

    const [next, setNext] = useState(1)

    // https://api.themoviedb.org/3/discover/movie?2aca0302b55a2b06d4710181fb2fbb20

    // https://api.themoviedb.org/3/discover/movie?9e6bdfa8d8fe8dfc60d7073805a4dfc7
    //  include_adult=false&include_video=false&language=en-US
    //  &page=${next}
    //  &sort_by=popularity.desc

        //  

     const url = `https://api.themoviedb.org/3/search/movie?query=${text}`
    const options = {
    method: 'GET',
    headers: {accept: 'application/json',  
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTZiZGZhOGQ4ZmU4ZGZjNjBkNzA3MzgwNWE0ZGZjNyIsIm5iZiI6MTc2NzI3MDg2Ni45OSwic3ViIjoiNjk1NjY5ZDI0NWRkNDgwMzU0Y2M4NjQ0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.J74uaHW3Gg6IoUUvTGZJRRqW-ztrxL-3tynlkmH3fpY'}
    };

    async function fetchMovies(){
        const response = await fetch(url, options)
        const movies = await response.json()
        setMovie(movies.results)
    }

    useEffect(() => {
        fetchMovies()
    }, [text])

    console.log(movie)
     function onChangeVal(event){
         setVal(event.target.value)
     }

     function onChangeText(){
         setText(val)
     }

    function onFindMovie(event){
        setFind(event.target.value)
    }

    function onNextPage(){
        setNext(next + 1)
    }
    function onPrevPage(){
        setNext(next - 1)
    }
    return(
        <>

            {/* <input type="text" placeholder="find movie"  value={find} onChange={onFindMovie}/>
              <ul>
             {movie.filter(movi => movi.title.toLowerCase().includes(find.toLocaleLowerCase())).map((movi) => (
                 <li key={movi.id} onClick={() => setSelectId(movi.id)}>{movi.title} <p>{movi.release_date}</p></li>
             ))}
            </ul> */}
            <div>
                <button onClick={() => onPrevPage()}>Prev</button>
                <p>Page: {next}</p>
                <button onClick={() => onNextPage()}>Next</button>
            </div>
            <ul>
            {movie.map((movi) => (
                    <li key={movi.id} onClick={() =>  setSelectId(movi.id)}>{movi.title}</li>
            ))}
            </ul>
        <form action="">
             <input type="text"  placeholder="Search Movie" value={val} onChange={onChangeVal}/> 
            <button type="button" onClick={() => onChangeText(text)}>Search</button>
            <p>{text}</p>
        </form>
            <iframe src={`https://moviesapi.pro/movie/${selectId}`} ></iframe>
            
        </>
    )
}