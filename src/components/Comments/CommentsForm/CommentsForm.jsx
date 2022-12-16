import { useParams } from 'react-router-dom';
import { postComment, updateComment } from "../../POSTS/commentsApi";
import Context from '../../shared/context/postsCtx';
import { Formik, Field, ErrorMessage, Form, useFormik } from "formik";
import * as yup from 'yup'
import SubmitBtn from "../../shared/ui/SubmintBtn";
import { useContext } from 'react';
import Button from '@mui/material/Button';
import TextfieldWrapper from '../../FormsUI/TextfieldWrapper';
function CommentsForm({ status, onSave }) {
    const { comments, setComments, resetForm } = useContext(Context)
    const initValues = {
        body: status.obj.body === undefined ? '' : status.obj.body
    }
    const { postId } = useParams()
    const todoSchema = yup.object().shape({
        body: yup.string().required("enter your comm").min(5).max(30),
    })
    function onSave({ body }) {
        if (status.mode === 'creation') {
            async function postReq() {
                const res = await postComment({ body, postId })
                setComments([res, ...comments])
            }
            postReq()
            resetForm()
        } else if (status.mode === 'edit') {
            async function updateReq() {
                const res = await updateComment({ body, id: status.obj.id })
                setComments(comments.map(e => {
                    if (e.id === res.id) {
                        return res
                    } else {
                        return e
                    }
                }))
            }
            updateReq()
            resetForm()
        }
    }
    return (

        <Formik
            initialValues={initValues}
            onSubmit={onSave}
            enableReinitialize={true}
            validationSchema={todoSchema}>
            {<Form >
                <div>
                    <p>Name of the current post:</p>
                    <div>
                        <TextfieldWrapper name="body" type="text" fullWidth={false}/>
                    </div>
                </div>
                <Button variant="outlined" type="button" onClick={resetForm}>Cancel</Button>
                <SubmitBtn text={status.mode === "creation" ? "save" : "edit"} />
            </Form>
            }
        </Formik>
    )

}
export default CommentsForm