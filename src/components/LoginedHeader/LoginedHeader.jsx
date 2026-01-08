import { Link } from 'react-router-dom'
import '/src/components/Header/Header.scss'
import Search from '/src/components/Header/Search/Search.jsx'

export default function Header(){
    return(
         <header className='header'>
        <div className='header-main'>
        <div className='header-left'>
          <Link to={"/"}>
            <img src="../img/logo.svg" alt="Logo" />
          </Link>
          <nav>
            <ul className='nav-list'>
              <li style={{listStyle: 'none'}}>
                <Link to={"/"}>
                <a href="#">Home</a>
                </Link>
              </li>
              <li style={{listStyle: 'none'}}>
                <a href="#">Movies</a>
              </li>
              <li style={{listStyle: 'none'}}>
                <Link to={"/anime"}>
                <a href="#">Anime</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className='header-right'>
          {/* Тут має бути інпут */}
           <Search/> 
          <div className='btn-box'>
           <img width={40} height={40} src="./img/profile.png" alt="User Icon" />
          </div>
        </div>
        </div>
      </header>
    )
}