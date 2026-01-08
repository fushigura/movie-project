import './DevelopedPages.scss'
import { Link } from 'react-router-dom'

export default function DevelopedPages(){
    return(
        <>
        <div className='developed-section'>
            <img src="./img/logos/backend.png" alt="Developed Icon" />
            <div>SORRY PAGE IS DEVELOPED</div>
            <Link to={"/"}>
            <button>Go Home</button>
            </Link>
            </div>
        </>
    )
}