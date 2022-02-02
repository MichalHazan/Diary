import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './Add';
import Intro from './Intro';
import List from './List';
import Todo from './Todo';

export default function Main() {
  return <div>
      <Routes>
            <Route path="/" element={<Intro/>}></Route>
            <Route path="/todo" element={<Todo/>}></Route>
            <Route path="/mymoney" element={<List/>}></Route>
            <Route path="/add" element={<Add/>}></Route>
        </Routes>
  </div>;
}
