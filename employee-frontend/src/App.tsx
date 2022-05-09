import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import EmployeeAdd from './components/EmployeeAdd';
import EmployeeList from './components/EmployeeList';
import EmployeeEdit from './components/EmployeeEdit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/add-employee" element={<EmployeeAdd />} />
          <Route path="/edit-employee/:id" element={<EmployeeEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
