import axios from 'axios'
const COMMENTS_URL = 'http://localhost:3021/comments'
export const fetchComments = async (id) => {
  try {
    const res = await axios.get(`${COMMENTS_URL}?postId=${id}`, {
    });
    return res.data
  } catch (err) {
    console.log(err);
  }
};
export const deleteComment = async (id) => {
    try {
      const res = await axios.delete(`${COMMENTS_URL}/${id}`, {
      });
      return res.data
    } catch (err) {
      console.log(err);
    }
  };
  export const updateComment = async (obj) => {
    try {
      const res = await axios.patch(`${COMMENTS_URL}/${obj.id}`, obj);
      return res.data
    } catch (err) {
      console.log(err);
    }
  };
  export const postComment = async (obj) => {
    try {
      const res = await axios.post(`${COMMENTS_URL}`, obj);
      return res.data
    } catch (err) {
      console.log(err);
    }
  };