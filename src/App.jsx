import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/index.css';
import Layout from './Components/Layout';
import Admin from './Pages/Admin';
import Dashboard from './Pages/Dashboard';
import Instructors from './Pages/Instructors';
import Schedules from './Pages/Schedules';
import Setings from './Pages/Setings';
import Students from './Pages/Students';
import Upload from './Pages/Upload';

function App() {
  return (

      <Router>
        <Routes>
          <Route path='/' element={<Layout/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/instructors' element={<Instructors/>} />
          <Route path='/settings' element={<Setings/>} />
          <Route path='/students' element={<Students/> } />
          <Route path='/upload' element={<Upload/>} />
          <Route path='/profile' element={<Admin/>} />
          <Route path='/schedules' element={<Schedules/>} />
          <Route path='/admin' element={<Admin/>} />
        </Routes>
        
      </Router>

    
  );
}

export default App;