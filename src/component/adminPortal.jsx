import AdminNavbar from "./adminNavbar";
import { Routes,Route } from "react-router-dom";
import AdminDashBoard from "./adminDashBoard";
import BookList from './bookList'
import UserList from "./userList";
import ReadBook from "./readBook";
import AddUsers from "./addUsers";
import AddBook from './addBook'

const AdminPortal = () => {
    return (  
        <div className="adminPortal">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashBoard/>}/>
                <Route path="/add-book" element={<AddBook/>} />
                <Route path="/add-user" element={<AddUsers/>} />
                <Route path="/book-list" element={<BookList/>} />
                <Route path="/user-list" element={<UserList/>} />
                <Route path="/book-list/:id" element={<ReadBook/>} />
            </Routes>
        </div>
    );
}
 
export default AdminPortal;
