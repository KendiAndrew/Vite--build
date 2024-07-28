import {useEffect, useState} from "react";
import "../../Styles/App.css"
import {PostList} from "../PostList";
//import {PostForm} from "../PostForm";
import {PostFilter} from "../PostFilter";
import {MyModal} from "../../components/UI/MyModal/MyModal";
import {MyButton} from "../../components/UI/Button/Button";
import { usePosts} from "../../components/hooks/usePosts";
import {PostService} from "../API/PosrService";
import {Loader} from "../../components/UI/Loader/Loader";
import { useFetching } from "../../components/hooks/useFetching";
import { getPageCount } from "../Utils/pages";
import {Pagination} from "../../components/UI/pagination/Pagination";
import {MyInput} from '../UI/MyInput/MyInput'

export function Posts(){
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal] = useState(false)
    const sotedAndSearchedPost = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit] = useState(10)
    const [page, setPage] = useState(1)

    const [fetchPost, isPostLoading, postError] = useFetching(async (limit, page)=>{
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
    })

    const changePage=(page)=>{
        setPage(page)
        fetchPost(limit, page)
    }
    const createPost = (newPost)=>{
        setPosts([...posts, newPost])
        setModal(false)
    }

    useEffect(()=>{
        fetchPost(limit, page)
    }, [])

    const removePost= (post) =>{
        setPosts(posts.filter(p=> p.id !== post.id))
    }

    return (
    <>
        <div className="App">
            <div className="createButton">
                <MyInput
                    value= {filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                    placeholder='Пошук...'
                />
                <MyButton onClick={()=> setModal(true)}>
                    Створити пост
                </MyButton>
            </div>

            <MyModal visible={modal} setVisible={setModal} create={createPost}>
            </MyModal>

            <PostFilter 
                filter={filter} 
                setFilter={setFilter}
            />
            {postError &&
                <h1 style={{marginTop:'50px', width: '100%'}}>Сталася помилка {postError}</h1>
            }
            {isPostLoading
                ?<Loader/>
                :
                <div style={{overflow: 'hidden', position:'relative'}}>
                    <PostList post={sotedAndSearchedPost} remove={removePost} title={'Новини'} />
                    <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
                </div>
            }
            
        </div>
    </>
    );
}