import logo from './logo.svg';
import './App.css';
import WelcomePage from './Component/WelcomePage';
import { Route, Routes } from 'react-router-dom';
import RegistrationForm from './Component/Registration';
import LoginForm from './Component/LoginForm';
import LibrarianDashboard from './Component/Librarian';



function App() {
  return (

  <div>
   
  <Routes>
   <Route path="/" element={<WelcomePage />} />
   <Route path="/Signup" element={<RegistrationForm/>}/>
   <Route path="/LoginForm" element={<LoginForm/>}/>
   <Route path="/RegistrationForm" element={<RegistrationForm/>}/>
   <Route path="/Dashboard" element={<LibrarianDashboard/>}/>

   
   
   </Routes>
   
  </div>


     
  );
}

export default App;
