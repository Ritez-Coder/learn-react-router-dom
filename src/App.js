import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Auth from './pages/Auth';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Shop from './components/Shop';

function App() {
  return (
    <div>
      < Header />

      <Routes>
        <Route path='/' >
          <Route index element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='contact' element={<Contact />} />
          {/* <Route path='shop' element={<Shop />} /> */}
          <Route path='auth' element={<Auth />} />
          <Route path='*' element={< Error />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App;

function Error() {
  return (
    <div>
      404 Not Found !!!1
    </div>
  )
}