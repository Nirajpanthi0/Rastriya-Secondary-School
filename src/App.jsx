
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from './Component/Homepage/footer';
function App() {
  return (
   <>
   <div className='bg-slate-100'>

   <Navbar></Navbar>
   <Outlet></Outlet>
   </div>
   <div className='footer'>
    <Footer></Footer>
   </div>
   </>
 
  );
}

export default App;