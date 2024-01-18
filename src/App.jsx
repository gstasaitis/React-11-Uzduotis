import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './scss/styles.scss';
import NavBar from './components/NavBar';
import PetList from './pages/PetList';
import AddPet from './pages/AddPet';
import AddLog from './pages/AddLog';
import PetLogs from './pages/PetLogs';

function App(logEntry) {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="main cursor">
          <Routes>
            <Route path='/' element={<PetList />} />
            <Route path='/addpet' element={<AddPet />} />
            <Route key={logEntry.id} path='/addlog/:logId' element={<AddLog />} />
            <Route path='/petlogs/:logId' element={<PetLogs />} />
          </Routes>
        </div>
        <div className="footer">
    <footer>Copyright C VetBee 2023. All rights reserved.</footer>
</div>
      </BrowserRouter>
    </>
  );
}

export default App;
