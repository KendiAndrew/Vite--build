import {MyButton} from "../components/UI/Button/Button";
import '../Styles/App.css'
import {useNavigate} from 'react-router-dom'

export function PostItem({remove, number, post}){
    const router = useNavigate()
    return(
        <div className="post">
            <div className="post__content">
                <strong className="post__content__title">{number}. {post.title}</strong>
                <div className="post__content__text">
                    {post.body}
                </div>
            </div>
            <div className="post__btn">
                <MyButton onClick={()=>remove(post)}>Видалити</MyButton>
                <MyButton onClick={()=>router(`/posts/${post.id}`)}>Відкрити</MyButton>
            </div>
        </div>
    )
}