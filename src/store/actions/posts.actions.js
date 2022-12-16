import {fetchPosts, fetchPost, createPost, patchPost, deletePost} from '../../components/POSTS/postsApi'
// import { createAsyncThunk } from '@reduxjs/toolkit/dist/createAsyncThunk'
import { addPostsAction,updPostAction,delPostAction,addPostAction } from '../reducers/posts.reducers'


export function addPostRequestThunk(post){
    return async (dispatch)=>{
        const postInfo = await createPost(post)
        dispatch(addPostAction(postInfo))
    }
}
export function removePostRequestThunk(id){
    return async (dispatch)=>{
        await deletePost(id)
        dispatch(delPostAction(id))
    }
}
export function patchPostRequestThunk(obj){
    return async (dispatch)=>{
        const post = await patchPost(obj.id,obj)
        console.log(post);
        dispatch(updPostAction(post))
    }
}
// export function changeTodoRequestAction(id){
//     return async (dispatch,getState)=>{
//         const state = getState()
//         const todoInfo = state.Todo.todos.find((todo)=>todo.id ===id)//у нас ведь todos хранит стейт с todos
//         todoInfo.status = !todoInfo.status
//         const todo = await patchTodo(todoInfo)
//         dispatch(changeTodoAction(todo))
//     }
// }
export function fetchPostsThunk () {
    return async function (dispatch, getState) {
        try {
            const response = await fetchPosts();
            dispatch(addPostsAction(response))
        } catch (err) {
            return Promise.reject(err);
        }
    }
}
// export function fetchCommentsThunk () {
//     return async function (dispatch, getState) {
//         try {
//             const response = await fetchPosts();
//             dispatch(addPostsAction(response))
//         } catch (err) {
//             return Promise.reject(err);
//         }
//     }
// }


