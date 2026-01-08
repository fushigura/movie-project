import { useEffect, useState } from 'react'
import './MoviePage.scss'
import { useParams } from 'react-router-dom'
import { Link, scroller, Element } from 'react-scroll'
import Header from '../../components/Header/Header'


export default function MoviePage(){
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  const [favorite, setFavorite] = useState(false)
  const [watchLater, setWatchLater] = useState(false)
  const [watched, setWatched] = useState(false)

    function handleFavorite(){
        setFavorite(favorite => !favorite)
    }
     function handleWatchLater(){
        setWatchLater(watchLater => !watchLater)
    }
     function handleWatched(){
        setWatched(watched => !watched)
    }



  const url = `https://api.themoviedb.org/3/movie/${id}`
    const options = {
          method: "GET",
          headers: {accept: 'application/json',  
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTZiZGZhOGQ4ZmU4ZGZjNjBkNzA3MzgwNWE0ZGZjNyIsIm5iZiI6MTc2NzI3MDg2Ni45OSwic3ViIjoiNjk1NjY5ZDI0NWRkNDgwMzU0Y2M4NjQ0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.J74uaHW3Gg6IoUUvTGZJRRqW-ztrxL-3tynlkmH3fpY'}
    }
  useEffect(() => {
    if(id){
      fetch(url, options)
      .then(res => res.json())
      .then(data => setMovie(data) )
    }
  }, [id])

    return(
      <>
          <Header/>
      <main>
        <section className='movie-page'>
            <div className="container">
              <div className='movie-trailer'>
                <img style={{borderRadius: 20}} width={397} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="Movie Image" />
                <div className='trailer-btn'>
                  <img src="../img/trailer-icon.svg" alt="Trailer Icon" />
                  <button>Trailer</button>
                </div>
                <ul>
                  <li className={favorite ? 'active' : ""}>
                    <svg onClick={handleFavorite} width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.6093 8.3778C21.5412 8.16181 21.4158 7.97202 21.2487 7.83186C21.0816 7.69171 20.8801 7.60733 20.6689 7.58913L14.4929 7.06063L11.8203 0.689462C11.7352 0.48426 11.5967 0.309971 11.4217 0.187629C11.2466 0.0652881 11.0424 0.000123526 10.8337 1.75442e-07C10.625 -0.000123175 10.4208 0.0648 10.2456 0.186934C10.0704 0.309069 9.93177 0.483194 9.84644 0.688296L7.17386 7.06063L0.997778 7.58913C0.790272 7.60683 0.591895 7.68854 0.42638 7.82448C0.260865 7.96042 0.135221 8.14484 0.0644794 8.35566C-0.00626208 8.56649 -0.0191056 8.7948 0.0274855 9.01328C0.0740765 9.23176 0.178129 9.43116 0.327195 9.58763L4.89128 14.3791L3.27711 21.9065C3.2281 22.1343 3.24381 22.3728 3.3222 22.5909C3.40059 22.809 3.53805 22.9967 3.71673 23.1296C3.89541 23.2626 4.10707 23.3346 4.32424 23.3364C4.54141 23.3382 4.75407 23.2696 4.93461 23.1396L10.8334 18.9046L16.7321 23.1396C16.9166 23.2716 17.1343 23.3395 17.3557 23.3343C17.5772 23.329 17.7918 23.2509 17.9708 23.1104C18.1498 22.9698 18.2845 22.7737 18.3569 22.5482C18.4292 22.3228 18.4357 22.0789 18.3755 21.8493L16.3941 14.3826L21.3081 9.6203C21.6299 9.30763 21.7479 8.81996 21.6093 8.3778Z" fill="#757575"/>
                    </svg>
                    <span>Favorite</span>
                  </li>
                  <li className={watchLater ? 'active' : ""}>
                    <svg onClick={handleWatchLater} width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.84069e-07 2.75V21.3125C-8.71665e-05 21.4319 0.0309162 21.5492 0.0899588 21.653C0.149001 21.7568 0.234048 21.8434 0.336726 21.9043C0.439405 21.9652 0.556175 21.9983 0.675544 22.0004C0.794913 22.0025 0.912766 21.9734 1.0175 21.9161L8.25 17.9699L15.4825 21.9161C15.5872 21.9734 15.7051 22.0025 15.8245 22.0004C15.9438 21.9983 16.0606 21.9652 16.1633 21.9043C16.266 21.8434 16.351 21.7568 16.41 21.653C16.4691 21.5492 16.5001 21.4319 16.5 21.3125V2.75C16.5 2.02065 16.2103 1.32118 15.6945 0.805456C15.1788 0.289731 14.4793 0 13.75 0L2.75 0C2.02065 0 1.32118 0.289731 0.805456 0.805456C0.289731 1.32118 1.84069e-07 2.02065 1.84069e-07 2.75Z" fill="#757575"/>
                    </svg>
                    <span>Watch Later</span>
                  </li>
                  <li className={watched ? 'active' : ""}>
                    <svg onClick={handleWatched} width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.06178 8.5957C9.06178 9.37892 9.39596 10.1301 9.9908 10.6839C10.5856 11.2377 11.3924 11.5488 12.2337 11.5488C13.0749 11.5488 13.8817 11.2377 14.4765 10.6839C15.0713 10.1301 15.4055 9.37892 15.4055 8.5957C15.4055 7.81249 15.0713 7.06135 14.4765 6.50753C13.8817 5.95371 13.0749 5.64258 12.2337 5.64258C11.3924 5.64258 10.5856 5.95371 9.9908 6.50753C9.39596 7.06135 9.06178 7.81249 9.06178 8.5957ZM24.5303 7.91543C21.8456 2.6499 17.7873 0 12.3469 0C6.90377 0 2.8483 2.6499 0.163536 7.91807C0.0558495 8.13037 0 8.36224 0 8.59702C0 8.83181 0.0558495 9.06368 0.163536 9.27598C2.8483 14.5415 6.9066 17.1914 12.3469 17.1914C17.7901 17.1914 21.8456 14.5415 24.5303 9.27334C24.7484 8.84619 24.7484 8.35049 24.5303 7.91543ZM12.2337 13.2363C9.48092 13.2363 7.24928 11.1586 7.24928 8.5957C7.24928 6.03281 9.48092 3.95508 12.2337 3.95508C14.9864 3.95508 17.218 6.03281 17.218 8.5957C17.218 11.1586 14.9864 13.2363 12.2337 13.2363Z" fill="#757575"/>
                    </svg>
                    <span>Watched</span>
                  </li>
                </ul>
              </div>

              <div className='main-movie-info'>
                <span className='movie-title'>{movie?.title}</span>
                <div className='btn-box'>
                  <div className='watch-btn'>
                    <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9818 8.22074C16.6148 8.61605 17 9.31234 17 10.0625C17 10.8127 16.6148 11.509 15.9818 11.8639L3.2331 19.7702C2.57701 20.2149 1.75578 20.2329 1.08552 19.851C0.756096 19.6634 0.481877 19.3902 0.291085 19.0593C0.100293 18.7285 -0.000181854 18.3521 2.4709e-07 17.9688V2.15629C5.40872e-05 1.77321 0.100641 1.39706 0.291421 1.06649C0.482201 0.735929 0.756292 0.462878 1.08552 0.275408C1.41482 0.0881236 1.78734 -0.00680489 2.16477 0.000379536C2.54221 0.00756397 2.91095 0.116602 3.2331 0.316287L15.9818 8.22074Z" fill="#1D4ED8"/>
                    </svg>
                    <a href="#frame">
                    <button >Watch</button>
                    </a>
                  </div>
                  <div className='download-btn'>
                    <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.88 9.88203C27.085 9.33867 27.2 8.74453 27.2 8.125C27.2 5.43359 25.05 3.25 22.4 3.25C21.415 3.25 20.495 3.55469 19.735 4.07266C18.35 1.63516 15.765 0 12.8 0C8.38 0 4.8 3.63594 4.8 8.125C4.8 8.26211 4.805 8.39922 4.81 8.53633C2.01 9.53672 0 12.2484 0 15.4375C0 19.4746 3.225 22.75 7.2 22.75H25.6C29.135 22.75 32 19.8402 32 16.25C32 13.1066 29.8 10.4813 26.88 9.88203ZM20.235 14.3863L14.965 19.7387C14.655 20.0535 14.145 20.0535 13.835 19.7387L8.565 14.3863C8.06 13.8734 8.42 13 9.13 13H12.4V7.3125C12.4 6.86562 12.76 6.5 13.2 6.5H15.6C16.04 6.5 16.4 6.86562 16.4 7.3125V13H19.67C20.38 13 20.74 13.8734 20.235 14.3863Z" fill="#1D4ED8"/>
                    </svg>
                    <button>Download</button>
                  </div>
                </div>
                <div className='story-line'>
                  <span>STORYLINE</span>
                  <p>
                    {movie?.overview}
                  </p>
                </div>
                <ul>
                  <li>
                    <span>Rating</span>
                    <p>{movie?.vote_average.toFixed(1)}</p>
                  </li>
                  <li>
                    <span>Release year</span>
                    <p>{movie?.release_date}</p>
                  </li>
                  <li>
                    <span>Genres</span>
                    <p>Adventure, Fantacy</p>
                  </li>
                  <li>
                    <span>Countries</span>
                    <p>Japan</p>
                  </li>
                  <li>
                    <span>Duration</span>
                    <p>2 hours +</p>
                  </li>
                </ul>
              </div>

              <div className='author-info'>
                <span className='writen-by'>Writen by</span>
                <div className='author-card'>
                  <img src="../img/author-logo.png" alt="Aouthor Avatar" />
                  <div className='author'>
                  <span className='name'>Eiichiro Oda</span>
                  <span className='about-author'>Official Creator & manga artist</span>
                  </div>
                </div>
                <a style={{listStyle: 'none'}} className='see_all' href="#">
                  <span>See all</span>
                </a>
              </div>

              <div className='movie-section'>
                <iframe id='frame' src={`https://moviesapi.pro/movie/${movie?.id}`} frameborder="0" allowFullScreen></iframe> 
              </div>
            </div>
        </section>
      </main>
      </>
    )
}