import './App.scss';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import PageNotFound from './components/PageNotFound/PageNotFound';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <div className='container'>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/posts/:feedID" element={<Posts/>}/>
      <Route element={<PageNotFound/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
