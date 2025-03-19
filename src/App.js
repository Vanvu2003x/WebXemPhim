import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import Danhsachphim from './pages/Danhsachphim';
import Timkiem from './pages/Timkiem';
import Video from './pages/videoplay';
function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Danhsachphim></Danhsachphim>}></Route>
      <Route path='/video/:tenphim' element={<Video></Video>}></Route>
      <Route path='/:type' element={<Danhsachphim></Danhsachphim>}></Route>
      <Route path='/detail/:tenphim' element={<Detail></Detail>}></Route>
      <Route path='/keyword/:keyword' element={<Timkiem></Timkiem>}></Route>
    </Routes>

    </>
  );
}

export default App;
