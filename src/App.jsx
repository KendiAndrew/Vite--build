import {useState,useEffect} from "react";
import {
    BrowserRouter
} from "react-router-dom";
import {Navbar} from "./components/UI/Navbar/Navbar";
import {AppRouter} from "./components/AppRouter";
import { AuthContext } from "./components/context/Context";

export function App() {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
    },[])

    return (
        <AuthContext.Provider value ={{
            isAuth,
            setIsAuth
        }}>
            <div className="browserRouter">
                <BrowserRouter>
                    {isAuth
                        ?<Navbar/>
                        :<div></div>}
                    <AppRouter/>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    )
}