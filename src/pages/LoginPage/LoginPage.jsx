import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/firebase"
import { useNavigate, Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import "./LoginPage.scss"

export default function LoginPage(){
    const {register, handleSubmit} =  useForm()
    const navigate = useNavigate()

    const onSubmit = async(data) => {
        try{
            await signInWithEmailAndPassword(auth, data.email, data.password)
            navigate("/")
        }catch(err){
            alert("Дані введено некоректно")
        }
    }
    return(
        <>
        <div className="login-page">
            <div className="login-container">
                <form onSubmit={handleSubmit(onSubmit)} action="">
                    <div className="input-section">
                    <input placeholder="Enter email" type="text" {...register("email", {required: true})}/>
                    <input placeholder="Enter password" type="text" {...register("password", {required: true})}/>
                    </div>
                    <Link to={"/home"}>
                    <button type="submit">Login</button>
                    </Link>

                    <Link style={{textDecoration: 'none', color: 'white'}} to={"/register"}>
                    <div>Немає акаунту?</div>
                    </Link>
                </form>
            </div>
        </div>
        </>
    )
}