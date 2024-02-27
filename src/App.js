import logo from './logo.svg';
import './App.css';
import WelcomePage from './Component/WelcomePage';
import { Route, Routes } from 'react-router-dom';
import RegistrationForm from './Component/Registration';
import LoginForm from './Component/LoginForm';
import AdminDashboard from './Component/Admin';
import RegistrationLibrarianForm from './Component/RegistrationLibrarian';
import CustomerHome from './Component/Customer';
import ViewMembers from './Component/ViewMembers';
import ViewLibrarians from './Component/ViewLibrarians';
import LibrarianDashboard from './Component/Librarian';
import AddBookPage from './Component/AddBookPage';
import ViewBooks from './Component/ViewBooks';
import EditBook from './Component/EditBook';








function App() {
       const role=localStorage.getItem("role")
       console.log(role);
  return (
 
  <div>
   
  <Routes>
  
   <Route path="/" element={<WelcomePage />} />
   <Route path="/RegistrationForm" element={<RegistrationForm/>}/>
   <Route path="/LoginForm" element={<LoginForm/>}/>
   <Route path="/RegistrationLibrarianForm" element={<RegistrationLibrarianForm/>}/>
   <Route path="/Logout" element={<WelcomePage/>}/>
   <Route path="/AdminPage" element={<AdminDashboard/>}/>
   <Route path="/LibrarianPage" element={<LibrarianDashboard/>}/>
   <Route path="/CustomerPage" element={<CustomerHome/>}/>
   <Route path="/ViewMembers" element={<ViewMembers/>}/>
   <Route path="/viewLibrarian" element={<ViewLibrarians/>}/>
   <Route path="/AddBookPage" element={<AddBookPage/>}/>
   <Route path="/ViewBook" element={<ViewBooks/>}/>
   <Route path="/EditBook" element={<EditBook/>}/>
   <Route path="/edit-book/:isbn" component={EditBook} />
   
  
   

   </Routes>
   
   
  
   
  </div>


     
  );
}

export default App;
