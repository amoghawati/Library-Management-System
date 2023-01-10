import '../Style/bookList.css'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const BookList = () => {
    let navigate=useNavigate()
    let [books,setBooks]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch("http://localhost:4000/books")
            let data=await response.json()
            setBooks(data)
        }
        fetchData()
    },[books])
    let handleDelete=(id,title)=>{
        fetch(`http://localhost:4000/books/${id}`,{
            method:'DELETE'
    })
      alert(`${title} wiil be deleted permanently`)  
    }
    let read=(id)=>{
        navigate(`/admin/book-list/${id}`)
    }
    return ( 
        <div className="bookList">
            <h1>Book List: {books.length}</h1>
            <div className="books_section">
                {books.map(data=>(
                    <div className="book_card">
                       <div className="book-img">
                        <img src={data.thumbnailUrl} alt="" />
                       </div>
                       <div className="book-details">
                       <h1>{data.title} </h1>
                        <h6>PageCount:{data.pageCount} </h6>
                        <h6><b>Authors:</b> {data.authors.toString()}</h6>
                        <h6><b>category:</b>{data.categories.toString()} </h6>
                        <button onClick={()=>read(data.id)}>Read More</button>
                        <button onClick={()=>handleDelete(data.id,data.title)}>Delete</button>
                       </div>
                    </div>
                )  )}
            </div>
            
        </div>
     );
}
 
export default BookList;