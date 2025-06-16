import Login from './components/Login'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Recovery from './components/Recovery'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/rec" element={<Recovery/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
