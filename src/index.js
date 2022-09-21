import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './Books';
import Home from './Home';
import Layout from './Layout';
import BookDetails from './BookDetails';
import BookEdit from './BookEdit';

const root=ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route  index element={<Home/>}></Route>
            <Route path='/books' element={<Books/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/books/:id' element={<BookDetails/>}></Route>
            <Route path="/books/edit/:id" element={<BookEdit/>}></Route>
            <Route path="/books/add" element={<BookEdit/>}></Route>
        </Route>
    </Routes>
  </BrowserRouter>
 )

