import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../../components/hooks/useFetching";
import {PostService} from "../API/PosrService";
import {Loader} from "../../components/UI/Loader/Loader";
import cl from "../../Styles/PostIdPage.module.css"

export function PostIdPage(){
    const params= useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading] = useFetching( async (id)=>{
        const response = await PostService.getById(id)
        setPost(response.data);
    })
    const [fetchComments] = useFetching( async (id)=>{
        const response = await PostService.getComById(id)
        setComments(response.data);
    })

    useEffect(()=>{
        fetchPostById(params.id)
        fetchComments(params.id)
    },[])
    return(
        <div style={{display: 'flex',flexDirection:'column', margin:"0px auto", width: "800px"}}>
            {isLoading
                ?<Loader/>
                :<div>
                    <h1 className={cl.comTitle}>{post.title}</h1>
                    <h1>Коментарі:</h1>
                    <div>{comments.map(el=>
                        <div key={el.id}>
                            <h5 className={cl.userTitle}> Коментар користувача {el.email}:</h5>
                            <div>{el.body}</div>
                        </div>
                )}</div>
                </div>
            }
        </div>
    )
}