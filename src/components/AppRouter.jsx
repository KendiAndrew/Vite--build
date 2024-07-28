import { useContext } from "react";
import { Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from './router/routes'
import {Login} from "../components/pages/Login";
import {Posts} from "../components/pages/Posts";
import { AuthContext } from "./context/Context";

export function AppRouter(){
    const {isAuth} = useContext(AuthContext);
    return(
        <div className="kokakola">
                {isAuth
                    ?(
                        <Routes>
                            {privateRoutes.map(route => (
                                <Route
                                    element={<route.component />}
                                    path={route.path}
                                    exact= {route.exact}
                                    key={route.path}
                                />
                            ))}
                            <Route path='*' element={<Posts />} />
                        </Routes>
                    ) 
                    :<Routes>
                        {publicRoutes.map(route =>
                        <Route 
                            element={<route.component/>} 
                            path={route.path} 
                            exact= {route.exact}
                            key={route.path}
                        />
                        )}
                    <Route path='*' element={<Login/>}/>
                </Routes>
                }
        </div>
    )
}