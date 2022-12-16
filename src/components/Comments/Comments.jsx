import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Context from "../shared/context/postsCtx";
import { fetchComments, deleteComment, updateComment, postComment } from '../POSTS/commentsApi'
import CommentsList from './CommentsList/CommentsList';
import CommentsForm from './CommentsForm/CommentsForm';
import Button from '@mui/material/Button';
function Comments() {
    const { postId } = useParams();
    const [comments, setComments] = useState([]);
    const [status, setStatus] = useState({
        toShow:false,
        mode:'creation',
        obj: {}
    });
    function setEditMode(obj){
        setStatus({toShow:true, mode: 'edit', obj})
    }
    function resetForm(){
        setStatus({
            toShow:false,
            mode:'creation',
            obj: {}
        })
    }
    return (
        <Context.Provider value={{comments,setComments, setEditMode, resetForm}}>
            <div style={{ flexWrap: "wrap", width: "100%", justifyContent: "space-between" }}>
                {!status.toShow?<Button variant="contained"  onClick={()=>setStatus({...status,toShow:true})}>create</Button>:''}
                {status.toShow?<CommentsForm status={status}/>:''}
                <CommentsList/>
            </div>
        </Context.Provider>

    )
}
export default Comments