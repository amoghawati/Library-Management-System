import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../Style/addBook.css'
const AddUsers = () => {
    let [name,setName]=useState("")
    let [age,setAge]=useState("")
    let [email,setEmail]=useState("")
    let [phno,setPhno]=useState("")
    // let [id,setId]=useState("")
    let navigate=useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault()// to prevent reloading web-page
        let userData={name,age,email,phno}//,id
        fetch('http://localhost:4000/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        } )
        alert("user added Successfully")
        navigate('/admin/user-list')
    }
    let handleReset=()=>{
        setName("")
        setAge("")
        setEmail("")
        setPhno("")
        // setId("")
    }
    return ( 
        <div className="addUsers">
            <h1>Add to New user </h1>
          
              
                <div className="form4">
                <form action="" onSubmit={handleSubmit}>
                <div className="name">
                        <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value) } />
                    </div>
                    <div className="age">
                        <input type="text" min='1' placeholder="enter age" value={age} onChange={(e)=>setAge(e.target.value) } />
                    </div>
                    <div className="email">
                        <input type="email" placeholder="enter email" value={email} onChange={(e)=>setEmail(e.target.value) } />
                    </div>
                    <div className="phno">
                        <input type="tel" minLength='10' maxLength='10' placeholder="enter phno" value={phno} onChange={(e)=>setPhno(e.target.value) }/>
                    </div>
                    {/* <div className="id">
                        <input type="text" placeholder="enter id" value={id} onChange={(e)=>setId(e.target.value) }/>
                    </div> */}
                    <button type="submit">Add to User List</button>
                    <button type="reset" onClick={handleReset}>Reset</button>
                </form>
                </div>
       
        </div>
     );
}
 
export default AddUsers;