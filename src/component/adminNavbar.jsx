import { Link } from "react-router-dom";
import '../Style/adminNavbar.css'
const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
            {/* <h1>Navbar</h1> */}
            <div className="n11">
            <h1>AdminPortal</h1>
        </div>
        <div className="n211">
            <ul>
                <li><Link to="/admin/">HOME</Link></li>
                <li><Link to="/admin/add-book">ADD_BOOK</Link></li>
                <li><Link to="/admin/add-user">ADD_USER</Link></li>
                <li><Link to="/admin/book-list">BOOK_LIST</Link></li>
                <li><Link to="/admin/user-list">USER_LIST</Link></li>
                <li id="n22"><Link to="/">LOGOUT</Link></li>
            </ul>
            
           
            
            
            
        </div>
        </div>
   
     );
}
 
export default AdminNavbar;