import { useEffect, useState } from "react";
import {   Link, useNavigate, useParams } from "react-router-dom";

function BookDetails()
{
    let params=useParams();
    let navigate=useNavigate();

    const [book,setbook]=useState({})
    useEffect(
        ()=>{
            fetch("https://631f5fe522cefb1edc4a825c.mockapi.io/Book/"+params.id)
            .then(
                (res)=>{
                    return res.json();
                }
            )
            .then(
                (res)=>{
                    console.log(res);
                    setbook(res);
                }
            )
        }
    ,[])
    return(
        <>
        <div class="card col-md-5">
        <img class="card-img-top" src={book.BookImage} alt="Card"></img>
        <div class="card-body">
        <h5 class="card-title">{book.BookName}</h5>
        <h5 class="card-title">{book.Pages}</h5>
        <h5 class="card-title">{book.BookAuthor}</h5>
        <h5 class="card-title">{book.BookPrice}</h5>
        <p class="card-text">{book.BookDescription}</p>
        <button class="btn btn-danger" onClick={
            ()=>{
                fetch("https://631f5fe522cefb1edc4a825c.mockapi.io/Book/"+params.id,
                    {
                        method:"Delete"
                    }
                )
                .then(
                    (res)=>{
                        navigate('/books');
                    }
                )
            }
        }>Delete</button>
    <button class="btn btn-primary"onClick={
        ()=>{
            navigate('/books/edit/'+params.id)
        }
    }>Edit</button>
    
  </div>
</div>
        </>
    )
}
export default BookDetails;