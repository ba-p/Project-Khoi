import logo from './logo.svg';
import './App.css';
import './variable.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './page1/page1';
import Page2 from './page2/page2';
import Page3 from './page3/page3';
import UpdateInvoiceStatus from './UpdateInvoiceStatus/UpdateInvoiceStatus';
import AddFood from './AddFood/AddFood';
import AdminLogin from './AdminLogin/AdminLogin';
import AdminPage from './AdminPage/AdminPage';
import CustomerInforamtion from './CustomerInformation/CustomerInformation';
import Voucher from './Voucher/Voucher';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1/>}/>
        </Routes>

        <Routes>
          <Route path="/page2" element={<Page2/>}/>
        </Routes>
        
        <Routes>
          <Route path="/page3" element={<Page3/>}/>
        </Routes>

        <Routes>
          <Route path="/page4" element={<Page1/>}/>
        </Routes>

        <Routes>
          <Route path="/UpdateInvoiceStatus" element={<UpdateInvoiceStatus/>}/>
        </Routes>

        <Routes>
          <Route path="/AddFood" element={<AddFood/>}/>
        </Routes>

        <Routes>
          <Route path="/AdminLogin" element={<AdminLogin/>}/>
        </Routes>

        <Routes>
          <Route path="/AdminPage" element={<AdminPage/>}/>
        </Routes>

        <Routes>
          <Route path="/CustomerInformation" element={<CustomerInforamtion/>}/>
        </Routes>

        <Routes>
          <Route path="/Voucher" element={<Voucher/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
