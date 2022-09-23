
import './App.css';
import { AdminLoginpage } from './Components/AdminLoginpage';
import Homepage from './Components/HomePage';
import { Routes,Route} from 'react-router-dom';
import { AdminPage } from './Components/AdminPageServiceAdd';
import { AdminHomePage } from './Components/AdminHomePage';
import { AdminPagegerservice } from './Components/AdminPagegerservice';
import { Fulldetails } from './Components/Fulldetails';
import AddLead from './Components/AddLead';
import { ViewLead } from './Components/ViewLead';
import AddContact from './Components/AddContact';
import { ViewContacts } from './Components/ViewContact';
import { Auth } from './Components/Auth';
import { Loginmanager } from './Components/Loginmanager';
import { Dashboard } from './Components/Managercomp/Dashboard';
import { Managerservicerequest } from './Components/Managercomp/Managerservicerequest';
import Manageraddlead from './Components/Manageraddlead';
import { Managergetservicerequest } from './Managergetservicerequest';
import { ManagerViewLead } from './Components/ManagerViewLead';
import { ManagerAddContact } from './Components/ManagerAddContact';
import { ManagerViewContact } from './Components/ManagerViewContact';
import { EmployeeLogin } from './Components/EmployeeLogin';
import { EmployeeDashboard } from './Components/EmployeeDashboard';
import { EmployeeViewservice } from './Components/EmployeeViewservice';
import { EmployeeViewlead } from './Components/EmployeeViewlead';
import { EmployeeViewContact } from './Components/EmployeeViewContact';
import { Passwordreset } from './Components/Passwordreset';
import { Newpassword } from './Newpassword';



export const url1="https://crmback123.herokuapp.com"
function App() {
  return (
    <div className="App">

<Routes>
  
  <Route path='/admin' element={<AdminLoginpage/>}/>
  
  <Route path='/admindashboardaddingservicerequest' element={<AdminPage/>}/>
  <Route path='' element={<Homepage/>}/>
  <Route path='AdminHomePage' element={<AdminHomePage/>}/>
  <Route path='admindashboardgetservicerequest' element={<AdminPagegerservice/>}/>
  <Route path='addlead' element={<AddLead/>}/>
  <Route path='ViewLead' element={<ViewLead/>}/>
  <Route path='AddContact' element={<AddContact/>}/>
  <Route path='ViewContacts' element={<ViewContacts/>}/>
  <Route path='auth' element={<Auth/>}/>
  <Route path='manager' element={<Loginmanager/>}/>
  <Route path='/managerdashboard' element={<Dashboard/>}/>
  <Route path='/manageraddlead' element={<Manageraddlead/>}/>
  
  <Route path='/managerdashboardaddingservicerequest' element={<Managerservicerequest/>}/>
  <Route path='/managerdashboardgetservicerequest' element={<Managergetservicerequest/>}/>
  <Route path='/managerViewLead' element={<ManagerViewLead/>}/>
  <Route path='/managerAddContact' element={<ManagerAddContact/>}/>
  <Route path='/managerViewContacts' element={<ManagerViewContact/>}/>
  <Route path='/EmployeeLogin' element={<EmployeeLogin/>}/>
  <Route path='/EmployeeHomepage' element={<EmployeeDashboard/>}/>
  <Route path='/employeeviewservice' element={<EmployeeViewservice/>}/> 
  <Route path='/employeeViewLead' element={<EmployeeViewlead/>}/> 
  <Route path='/employeeViewContacts' element={<EmployeeViewContact/>}/> 
  <Route path='/forgotpassword' element={<Passwordreset/>}/> 
  <Route path='/newpassword/:token' element={<Newpassword/>}/> 
 
  
 

</Routes>
    </div>
  );
}

export default App;
