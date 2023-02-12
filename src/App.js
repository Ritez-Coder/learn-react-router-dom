import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Auth from './pages/Auth';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div>
      < Header/>

      <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </div>
  )
}
export default App;

