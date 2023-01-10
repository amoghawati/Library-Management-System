import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Style/adminLogin.css'

const AdminLogin = () => {
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    let navigate=useNavigate();
 
let login=(e)=>
    {
        e.preventDefault();
        let data={email,password}
        // console.log(data)
        if(email== 'admin@gmail.com' && password==123)
        {
            navigate('/admin/')
        }
        else{
            alert("invalid Login credentials")
        }
    }
    return ( 
        <div className="adminLogin">
            <div className="form" onSubmit={login}>
                <h1 id="a1">ADMIN LOGIN</h1>
                <div  className="form_input">
                <form  action="">
                <label id="a2" htmlFor="">Email</label>
                <div className="email">
                    <input id="a3" type="email" required value={email} placeholder="enter your Email" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <label id="a4" htmlFor="">password</label>
                <div  className="password">
                    <input id="a5" type="password" required value={password} placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button id="a6">Login</button>
                </form>
                </div>
            </div>
        </div>
     );
}
 
export default AdminLogin;