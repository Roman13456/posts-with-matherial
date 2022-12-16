import { useContext, useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import {fetchComments ,deleteComment ,updateComment ,postComment} from '../../POSTS/commentsApi'
import CommentItem from '../CommentItem/CommentItem';
import Context from "../../shared/context/postsCtx";
function CommentsList(){
    const {postId} = useParams();
    const {setComments, comments} = useContext(Context);
    useEffect(()=>{
        async function getComms(){
            setComments((await fetchComments(postId)).reverse())
        }
        getComms();
        
    },[])
    function removeComm(id){
        try{
            async function delComm(){
                await deleteComment(id)
                setComments(comments.filter((e)=>e.id!==id))
            }
            delComm();
        }catch(e){
            alert(e)
        }
        
    }
    function saveComm(id){
        try{
            async function setComm(){
                const res = await postComment(id)
                setComments([...comments, res])
            }
            setComm();
        }catch(e){
            alert(e)
        }
        
    }
    return(
        <div style={{ flexWrap:"wrap", width: "100%", justifyContent:"space-between"}}>
        {comments.map((item)=>{
            return <CommentItem  key={item.id} item={item} onRemove={removeComm}/>
        })}
    </div>
        
    )
}
export default CommentsList