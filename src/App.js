import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homePage';
import ArticleListpage from './pages/articleList';
import Articlepage from './pages/article';
import Aboutpage from './pages/aboutMe';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>The Story of Korey</h1>
      <div className="page-body">
        <Routes>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/posts" element={<ArticleListpage/>}/>
          <Route path="/posts/:postId" element={<Articlepage/>}/>
          <Route path="/aboutme" element={<Aboutpage/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
