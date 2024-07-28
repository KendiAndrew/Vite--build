import {PostItem} from "./Postitem";
import { TransitionGroup,CSSTransition } from "react-transition-group";

export function PostList({post, title, remove}){
    if(!post.length){
        return(
            <h1 style={{textAlign: 'center'}}>
                Пости не знайдені!
            </h1>
        )
    }

    return(
        <>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <TransitionGroup>
                {post.map((post, index)=>
                <CSSTransition 
                    key={post.id}
                    timeout ={500}
                    classNames = 'post'
                >
                    <PostItem remove={remove}  number={index+1} post={post}/>
                </CSSTransition>
                )}
            </TransitionGroup>
            
        </>
    )
}