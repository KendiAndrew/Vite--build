import cl from './MyModal.module.css'
import {PostForm} from "../../PostForm"
export function MyModal({visible, setVisible, create}){

    const rootClasses = [cl.myModal]
    if(visible){
        rootClasses.push(cl.active)
    }

    return(
        <div className={rootClasses.join(' ')} onClick={()=> setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e)=> e.stopPropagation()}>
                <PostForm create={create}></PostForm>
            </div>
        </div>
    )
}