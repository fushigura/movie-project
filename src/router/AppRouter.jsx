import "../index.scss"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AnimePage from "../pages/AnimePage/AnimePage";
import MoviePage from "../pages/MoviePage/MoviePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import LoginedHomePage from "../pages/LoginedHomePage/LoginedHomePage"

const router = createBrowserRouter([
    {path: "/", element: <HomePage/>},
    {path: "/anime", element: <AnimePage/>},
    {path: "/movie/:id", element: <MoviePage/>},
    {path: "/register", element: <RegisterPage/>},
    {path: "/login", element: <LoginPage/>},
    {path: "/home", element: <LoginedHomePage/>}
])

export default function AppRouter(){
    return <RouterProvider router={router}/>
}