  import Login from './pages/Login/index.jsx'
  import Cadastro from './pages/Cadastro/index.jsx'
  import Home from './pages/Home/index.jsx'

  import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'

  export default function App() {
    
    return (
      <Router>

        


        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />

      </Routes>
      </Router>
      
    )
  }