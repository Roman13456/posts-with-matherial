import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removePostRequestThunk } from '../../../store/actions/posts.actions';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function PostItem({ item, onDelete }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <Card style={{ maxWidth: "33%" , width: "100%"}} onClick={(e)=>{
        if(!e.target.classList.contains("editBtn")){
          navigate(`post/${item.id}`)}}
        }>
      <CardMedia
        component="img"
        alt=""
        height="200px"
        image={item.preview}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.author}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" className="editBtn" onClick={(e)=>{navigate(`postForm/edit/post/${item.id}`)}}>Edit</Button>
      <Button variant='outlined' className="editBtn" onClick={(e)=>{dispatch(removePostRequestThunk(item.id))}}>Delete</Button>
      </CardActions>
    </Card>
    // <div style={{border: "1px solid",marginBottom: "50px",width: "33%"}}  onClick={(e)=>{
    //   if(!e.target.classList.contains("editBtn")){
    //     navigate(`post/${item.id}`)}}
    //   }>
    //   <div>
    //     <img src={item.preview} alt="" style={{width:'100%'}}></img>
    //     <button className="editBtn" onClick={(e)=>{navigate(`postForm/edit/post/${item.id}`)}}>Edit</button>
    //     <button className="editBtn" onClick={(e)=>{dispatch(removePostRequestThunk(item.id))}}>Delete</button>
    //     <p>{item.title}</p>
    //     <p>{item.author}</p>
    //   </div>
    //   {/* <button type="button" onClick={onAbort}>back</button> */}
    // </div>
  )
}



export default PostItem;