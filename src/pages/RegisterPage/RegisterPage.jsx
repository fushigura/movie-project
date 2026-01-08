import { useForm } from "react-hook-form"
import { createUserWithEmailAndPassword } from "firebase/auth"
import {auth, db} from "../../firebase/firebase"
import { doc, setDoc, collection, getDocs } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import "./RegisterPage.scss"
import { useEffect } from "react"

export default function RegisterPage(){

    const {register, handleSubmit} =  useForm()
    const navigation = useNavigate()
    
    const onSubmit = async (data) => {
       try{
         console.log('auth', auth)
        console.log('signup data', data)
        const credential = await createUserWithEmailAndPassword(auth, data.email, data.password)
        const uid = credential.user.uid 
        await setDoc(doc(db, "users", uid), {
            username: data.username,
            email: data.email,
        })
        navigation("/login")
       }catch(err){
         console.error(err.message)
           console.log(err.code, err.message, err)
        console.error('signup error', err)
       }
    }
    return(
        <>
        <div className="register-page">
            <div className="register-container">
                <form onSubmit={handleSubmit(onSubmit)} action="">
                    <div className="input-section">
                        <input type="input" placeholder="Username" {...register("username", {required: true})}/>
                        <input type="input" placeholder="Email"{...register("email", {required: true})}/>
                        <input type="input" placeholder="Password" {...register("password", {required: true})}/>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
        </>
    )
}