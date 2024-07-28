import {MyInput} from "../components/UI/MyInput/MyInput";
import {MyButton} from "../components/UI/Button/Button";
import {useState} from "react"

export function PostForm({create}){
    const [post, setPost] = useState({title:'', body:''})

    const addNewPost=(e)=>{
        e.preventDefault();
        const newPost={
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
    }
    return(
        <>
            <form>
                <MyInput
                    type = "text" 
                    placeholder="Назва поста"
                    value = {post.title}
                    onChange={e=> setPost({...post, title: e.target.value})}
                />
                <MyInput 
                    type = "text" 
                    placeholder="Опис поста"
                    value = {post.body}
                    onChange={e=> setPost({...post, body: e.target.value})}
                />
                <MyButton onClick= {addNewPost}>Створити пост</MyButton>
            </form>
        </>
    )
}