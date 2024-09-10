
import './App.css'
import Header from './Header'
import About from './About'
import Footer from './Footer'
import {
  BrowserRouter,
 Routes,
  Route,
  
} from "react-router-dom";
import Home from './Home';
import Work from './Work';
import Blog from './Blog';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
 

  return (
   
     <BrowserRouter>
     <Header/>
     <Navbar/>
     <Routes>
     
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/work' element={<Work/>}/>
     <Route path='/blog' element={<Blog/>}/>
     <Route path='/contact' element={<Contact/>}/>
     
   
     </Routes>
     <Footer/>
   
   
     </BrowserRouter>
   
   
  )
}

export default App
