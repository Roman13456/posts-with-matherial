import './App.css';
import Posts from './components/POSTS';
import {Route, Routes} from 'react-router-dom';
import PostInfo from './components/PostInfo/PostInfo';
import NotFound from './components/NotFound/NotFound';
import PostPage from './components/PostPage/PostPage';
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Posts/>}/>
        <Route path='post/:postId' element={<PostPage />}></Route>
        <Route path='postForm/:mode' element={<PostInfo />}>
          <Route path='post/:postId'/>
        </Route>
        {/* <Route path='postForm/:postId' element={<PostInfo />}></Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>

  );
}

export default App;
