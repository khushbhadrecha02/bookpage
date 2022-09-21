import { useEffect } from "react";
import {useState} from 'react'
import { Link } from "react-router-dom";
function Books()
{
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch("https://631f5fe522cefb1edc4a825c.mockapi.io/Book")
        .then(
            (res)=>{
                return res.json();
            }
        )
        .then(
            (res)=>{
                console.log(res);
                setBooks(res)
            }
        )
    },[])
   const formattedbooks=books.map(
    (pro)=>{
        return(
            <>
            
            <div class="card col-md-3">
            <Link to={"../books/"+pro.id}>    
            <img class="card-img-top" src={pro.BookImage} alt="Card"></img>
            <div class="card-body">
            <h5 class="card-title">{pro.BookName}</h5>
            <h5 class="card-title">{pro.Pages}</h5>
            <h5 class="card-title">{pro.BookAuthor}</h5>
            <h5 class="card-title">{pro.BookPrice}</h5>
            <p class="card-text">{pro.BookDescription}</p>
   
  </div>
</Link>
</div>
            

            </>
        )   
    }
   )
   return <div class="row">{formattedbooks}</div>;
}
export default Books;