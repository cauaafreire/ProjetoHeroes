import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/home'
import Heroes from './pages/heroes'

function App(){
  return(
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/heroes">Heroes</Link>
      </nav>
      
      <hr/>

      <Routes>a
        <Route path="/" element={<Home/>} />
        <Route path="/heroes" element={<Heroes/>} />
      </Routes>
    </div>
  )
}

export default App