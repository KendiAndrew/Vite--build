import { useContext } from "react";
import { Link } from "react-router-dom";
import cl from './Navbar.module.css'
import { AuthContext } from "../../context/Context";

export function Navbar (){
    const {setIsAuth} = useContext(AuthContext)

    const logout = ()=>{
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return(
        <div className={cl.navbar}>            
            <button className={ cl.navbarBtn} onClick= {logout}>Вийти</button>
            <div className={cl.navbar_links}>
                <Link to="/posts">Пости</Link>
                <Link to="/about">Про нас</Link>
            </div>
        </div>
    )
}