import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/styles.scss'
import NavBar from './components/NavBar'
import PetList from './pages/PetList'
import AddPet from './pages/AddPet'
import AddLog from './pages/AddLog'
import PetLogs from './pages/PetLogs'

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
  <div className="main">
      <Routes>
        <Route path='/' element={<PetList/>}></Route>
        <Route path='/addpet' element={<AddPet />} />
        <Route path='/addlog' element={<AddLog />} />
        <Route path='/petlogs' element={<PetLogs />} />
          </Routes>
  </div>
    </BrowserRouter>
    </>
  )
}

export default App
