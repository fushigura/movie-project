import { Link } from 'react-router-dom'
import './Header.scss'
import Search from './Search/Search'

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
            <Link to={"/register"}>
            <button>Sign in</button>
            </Link>

            <Link to={"/login"}>
            <button>Sign Up</button>
            </Link>
          </div>
        </div>
        </div>
      </header>
    )
}