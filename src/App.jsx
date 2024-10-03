  import Login from './pages/Login/index.jsx'
  import Cadastro from './pages/Cadastro/index.jsx'
  import Home from './pages/Home/index.jsx'
  import Navbar from './Componets/Navbar/index.jsx'

  import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

  export default function App() {
    
    return (
      <Router>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Cadastro' element={<Cadastro/>}/>
        </Routes>

      </Router>
    )
  }