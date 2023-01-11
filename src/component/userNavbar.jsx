import { Link } from "react-router-dom";
import '../Style/adminNavbar.css'
const UserNavbar = () => {
    return ( 
        <div className="userNavbar">
             <div className="n11">
            <h1>UserPortal</h1>
        </div>
            <div className="n211">
                <ul>
                    <li><Link to="/user/">HOME</Link></li>
                    <li><Link to="/user/book-list">BOOK_LIST</Link></li>
                    <li id="n22"><Link to="/">LOGOUT</Link></li>
                </ul>
 
            </div>
        </div>
     );
}
 
export default UserNavbar;