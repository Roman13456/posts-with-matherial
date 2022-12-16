import { createSlice } from '@reduxjs/toolkit'
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts:[]
    },
    reducers: {
        addPostsAction: (state, action) =>{
            const posts =  action.payload.reverse();
            state.posts = posts;
        },
        updPostAction: (state, action) => {
            const taskObj = action.payload;
            const taskIndex = state.posts.findIndex((task) => task.id === taskObj.id);
            if (taskIndex > -1) {
                const updatedTasks = [...state.posts];
                updatedTasks[taskIndex] = taskObj;
                state.posts = updatedTasks;
            }
        },
        delPostAction: (state, action) => {
            const postId = action.payload;
            const updatedTasks = state.posts.reduce((acc, task)=>{
                if (task.id !== postId) acc.push(task);
                return acc;
            }, []);
            state.posts = updatedTasks;
        },
        addPostAction: (state, action) => {
            const obj = action.payload;
            state.posts = [obj,...state.posts];
        },
    }
})
export const { addPostsAction,updPostAction,delPostAction,addPostAction} = postsSlice.actions
export default postsSlice.reducer