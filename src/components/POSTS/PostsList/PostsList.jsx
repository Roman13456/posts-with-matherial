import PostItem from '../PostItem/PostItem';
import React,{useContext} from "react";
import Context from "../../shared/context/postsCtx";

function PostsList() {
  const {posts} = useContext(Context)
  return (
    
    <div style={{display: "flex",gap: "0.5%", flexWrap:"wrap", width: "100%"}}>
        {posts.map((item)=>{
            return <PostItem  key={item.id} item={item}/>
        })}
    </div>
  );
}

export default PostsList;