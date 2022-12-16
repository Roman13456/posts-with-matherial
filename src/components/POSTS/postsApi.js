import axios from 'axios'
const POST_URL = 'http://localhost:3021/posts'
export const fetchPosts = async () => {
  try {
    const res = await axios.get(POST_URL, {
      // params: { category: 'all', count: '1' },
    });
    return res.data
  } catch (err) {
    console.log(err);
  }
};
export const fetchPost = async (id) => {
  try {
    const res = await axios.get(`${POST_URL}/${id}` , {
    });
    return res.data;
  } catch (err) {
    console.log(err)
    return `${err}`;
  }
};
export const createPost =  async(obj)=>{
  try{
    obj.preview = "https://www.reviewpro.com/wp-content/uploads/2019/05/traveler.jpeg"
    const res = await axios.post(POST_URL, obj)
    return res.data
  }catch(err){
    console.log(err)
    return `${err}`;
  }
}  
export const patchPost =  async(id,obj)=>{
  try{
    console.log('res.data')
    const res = await axios.patch(`${POST_URL}/${id}`, obj)
    return res.data
  }catch(err){
    console.log(err)
    return `${err}`;
  }
} 
export const deletePost =  async(id)=>{
  try{
    const res = await axios.delete(`${POST_URL}/${id}`)
    return res.data
  }catch(err){
    console.log(err)
    return `${err}`;
  }
} 
