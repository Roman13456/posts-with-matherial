import {useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { fetchPost } from "../POSTS/postsApi";
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
function PostPage() {
  const { postId } = useParams();
  const initValues = {
    title:"",
    description:"",
    author:"",
}
  const [post, setPost] = useState(initValues);
  const navigate = useNavigate()
  function onAbort() {
    navigate('/')
}
  useEffect(() => {
    async function init() {
      const postInfo = await fetchPost(postId)
      console.log(postInfo)
      setPost(postInfo)
    }
    init()
  }, []);
  return (
    <Container>
        <p><Link onClick={onAbort}>Home</Link>/name of current post</p>
        <p>{post?.title || "demo"}</p>
        <p>{post?.description || "demo"}</p>
        <Comments/>
    </Container>
  );
}

export default PostPage;