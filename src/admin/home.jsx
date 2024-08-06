
import Sidebar from "../Component/admin/Sidebar";
import { Outlet } from 'react-router-dom';
// import ProtectedRoute from "../utils/ProtectedRoute";

const AdminLayout = ({ children }) => {
  return (
    // <ProtectedRoute>
    <div className="flex h-auto">
       <Outlet />
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-4">
        <div className="container mt-20 mx-auto">
          {/* This will render the matched child route */}
          {children} {/* This will render the children passed to AdminLayout */}
        </div>
      </div>
    </div>
    // </ProtectedRoute>
  );
};

export default AdminLayout;
