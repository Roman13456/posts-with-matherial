import { useDispatch,useSelector } from 'react-redux';
import PostsList from './PostsList/PostsList';
// import {addTodoRequestAction, removeTodoRequestAction,changeTodoRequestAction,addTodosRequestAction } from '../../store/actions/todos.actions';
import { useEffect } from 'react';
import Context from "../shared/context/postsCtx";
import { useNavigate } from 'react-router-dom';
import { fetchPostsThunk } from '../../store/actions/posts.actions';
import { Button } from '@mui/material';
function Posts() {
  const posts = useSelector((state)=>state.POSTS.posts)
  console.log(posts)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchPostsThunk()) 
  },[])
  return (
    <>
    <Context.Provider value={{posts}}>
      <Button variant="contained" onClick={()=>navigate(`postForm/creation`)}>add post</Button>
      <PostsList/>
    </Context.Provider>
    </>
  );
}

export default Posts;