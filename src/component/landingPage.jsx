import { Link } from "react-router-dom";
import '../Style/landingPage.css'
const LandingPage = () => {
    return ( 
        <div className="landingpage">
            <div className="selectLoginType">
                <h1>LIBRARY MANAGEMENT SYSTEM</h1>
                <div className="usersland">
                    <div className="logo">
                        <img id="i1" src="images/logo1.jpg" alt="" />
                        <img id="i2" src="images/logo2.jpg" alt="" />
                    </div>
                    <div className="userland">
                        <Link id="i3" to='/admin-login'>ADMIN-LOGIN</Link>
                        <Link id="i4" to='/user-login'>USER-LOGIN</Link>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default LandingPage;