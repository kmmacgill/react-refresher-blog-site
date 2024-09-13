import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homePage';
import ArticleListpage from './pages/articleList';
import Articlepage from './pages/article';
import Aboutpage from './pages/aboutMe';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
    <h1>Homepage</h1>
    <div className="App">
      <Navbar/>
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
