import { useContext } from 'react';
import Context from '../../shared/context/postsCtx';
import Button from '@mui/material/Button';
function CommentItem({ item,onRemove }) {
  const {setEditMode} = useContext(Context);
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
        <p>{item?.body || "demo"}</p>
        <div>
        <Button variant="contained" className="editBtn" onClick={()=>{setEditMode(item)}}>Edit</Button>
        <Button variant='outlined' className="editBtn" onClick={()=>{onRemove(item.id)}}>Delete</Button>
        </div>
    </div>
  );
}

export default CommentItem;