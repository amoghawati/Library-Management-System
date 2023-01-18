import {Routes,Route} from 'react-router-dom'
import UserDashBoard from './userDashBoard';
import UserNavbar from './userNavbar';
import ReadBook from './readBook';
import BookList from './bookList'
import Error404 from './404';

const UserPortal = () => {
    return ( 
        <div className="userPortal">
            <UserNavbar/>
            <Routes>
            <Route path='/' element={<UserDashBoard/>} />
            <Route path='/book-list' element={<BookList/>}/>
            <Route path="/book-list/:id" element={<ReadBook/>} />
            <Route path='*' element={<Error404/>}/>
            </Routes>
        </div>
     );
}
 
export default UserPortal;