import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import {addPostRequestThunk ,patchPostRequestThunk} from "../../store/actions/posts.actions";
import {fetchPost} from "../POSTS/postsApi";
import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage, Form} from "formik";
import * as yup from 'yup'
import SubmitBtn from "../shared/ui/SubmintBtn";
import TextfieldWrapper from "../FormsUI/TextfieldWrapper";
import {Link} from "@mui/material"
function PostInfo() {
    const initValues = {
        title:"",
        description:"",
        author:"",
    }
    const [post, setPost] = useState(initValues);
    const { postId,mode } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        async function init() {
            if(mode==='edit'){
                const postInfo = await fetchPost(postId)
                console.log(postInfo)
                setPost(postInfo)
            }
        }
        init()
    }, []);
    const todoSchema = yup.object().shape({
        title: yup.string().required().min(2).max(7),//чомусь не працює string, цифри також приймає
        description: yup.string().required().min(10).max(100),
        author: yup.string().required().min(7).max(13)
    })
    function onSave({ title, description, author}) {
        if(mode==='creation'){
            dispatch(addPostRequestThunk({ id: postId, title, description,author }))
        }else if(mode==='edit'){
            dispatch(patchPostRequestThunk({ id: postId, description, author,title}))
        }
        navigate('/')
    }
    function onAbort() {
        navigate('/')
    }
    return (
        <>
        <Formik
            initialValues={post}
            onSubmit={onSave}
            enableReinitialize={true}
            validationSchema={todoSchema}>
            {   <Form >
                    <div>
                        <p><Link onClick={onAbort}>Home</Link>/name of current post</p>
                        <p>Title</p>
                        <div>
                            <TextfieldWrapper name="title"/>
                        </div>
                        <div>
                            <TextfieldWrapper name="description"/>
                        </div>
                        <div>
                            <TextfieldWrapper name="author" fullWidth={true}/>
                        </div>
                    </div>
                    <SubmitBtn text={"submit"} />
                </Form>
            }
        </Formik>
        </>
        
    )

}
export default PostInfo