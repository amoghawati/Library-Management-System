import { useNavigate } from "react-router-dom";
import '../Style/userLogin.css'

const UserLogin = () => {
let navigate=useNavigate();
let login=()=>
{
    navigate("/user/");
};
    return (
        <div className="userLogin">
            <div className="form" onSubmit={login}>
                <h1 id="u1">USER LOGIN</h1>
                <div className="form_input">
                <form action="">
                <label id="u2" htmlFor="">Email</label>
                <div className="email">
                    <input id="u3" type="email" required  placeholder="enter your Email" />
                </div>
                <label id="u4" htmlFor="">password</label>
                <div className="password">
                    
                    <input id="u5" type="password" required  placeholder="enter your password"  />
                </div>
                <button id="u6">Login</button>
                </form>
                </div>
            </div>
        </div>
      );
}
 
export default UserLogin;