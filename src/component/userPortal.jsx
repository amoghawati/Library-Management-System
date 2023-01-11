import {Routes,Route} from 'react-router-dom'
import UserDashBoard from './userDashBoard';
import UserNavbar from './userNavbar';
import ReadBook from './readBook';
import BookList from './bookList';
const UserPortal = () => {
    return ( 
        <div className="userPortal">
            <UserNavbar/>
            <Routes>
            <Route path='/' element={<UserDashBoard/>} />
            <Route path="/book-list" elemnet={<BookList/>} />
            <Route path="/book-list/:id" element={<ReadBook/>} />

            </Routes>
        </div>
     );
}
 
export default UserPortal;