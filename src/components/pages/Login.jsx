import { useContext } from "react";
import {MyInput} from "../UI/MyInput/MyInput";
import {MyButton} from "../UI/Button/Button";
import { AuthContext } from "../../components/context/Context";
import cl from "../../Styles/LoginPage.module.css"

export function Login (){
    const {setIsAuth} = useContext(AuthContext)

    const login = (event)=>{
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return(
        <div className={cl.mainPage}>
            <div>
                <h1 className={cl.loginTitle}>Login form</h1>
                <form onSubmit={login}>
                    <MyInput placeholder="Введіть логін" type="text"></MyInput>
                    <MyInput placeholder="Введіть пароль" type="password"></MyInput>
                    <MyButton>Ввійти</MyButton>
                </form>
            </div>
        </div>
    )
} 