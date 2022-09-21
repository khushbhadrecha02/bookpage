import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BookEdit()
{
    let params=useParams();
    let navigate=useNavigate();
    let [data,setData]=useState({});
    
        useEffect(
            ()=>{
                if(params.id>0)
                {
                fetch("https://631f5fe522cefb1edc4a825c.mockapi.io/Book/"+params.id)
                .then(
                    (res)=>{
                        return res.json();
                    }
                )
                .then(
                    (res)=>{
                        setData(res);
                    }
                )
            }
        }  
       ,[])
    

    return(
        <>
              <div class="form-group">
    <label for="exampleInputPassword1">BookImage</label>
    <input type="text" class="form-control" value={data.BookImage} aria-describedby="emailHelp" onChange={
        (e)=>{
            setData({...data,BookImage:e.target.value});
        }
    }></input>
    </div>
    <div class="form-group">
    <label for="exampleInputPassword1">BookName</label>
    <input type="text" class="form-control" value={data.BookName} onChange={
        (e)=>{
            setData({...data,BookName:e.target.value})
        }
    }></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Pages</label>
    <input type="text" class="form-control" value={data.Pages} onChange={
        (e)=>{
            setData({...data,Pages:e.target.value})
        }
    }></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">BookAuthor</label>
    <input type="text" class="form-control" value={data.BookAuthor} onChange={
        (e)=>{
            setData({...data,BookAuthor:e.target.value})
        }
    }></input>
    </div>
    <div class="form-group">
    <label for="exampleInputPassword1">BookPrice</label>
    <input type="text" class="form-control" value={data.BookPrice} onChange={
        (e)=>{
            setData({...data,BookPrice:e.target.value})
        }
    }></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">BookDescription</label>
    <input type="text" class="form-control" value={data.BookDescription} onChange={
        (e)=>{
            setData({...data,Bookdescription:e.target.value})
        }
    }></input>
  </div>
  <button type="submit" class="btn btn-primary" onClick={
    ()=>{
        if(params.id>0)
        {
            fetch("https://631f5fe522cefb1edc4a825c.mockapi.io/Book/"+params.id,
            {
                method:'PUT',
                body:JSON.stringify(data),
                headers:{
                    "Content-Type":"application/json"
                }
            }
            )
            .then(
                ()=>{
                    navigate('/books');
                }
            )
        }
        else
        {
            fetch("https://631f5fe522cefb1edc4a825c.mockapi.io/Book",
            {
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    "Content-Type":"application/json"
                }

            }
            )
            .then(
                ()=>{
                    navigate('/books');
                }
            ) 
        }
    }
  }>
    {params.id>0 && "Edit"}
    {!(params.id>0)&& "Add"}
    Book</button>

    
    </>
    )
}
export default BookEdit;