import { useState } from "preact/hooks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signin";
import Login from "./component/Login";
import Home from "./component/Home";
import Createtak from "./component/Createtak";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createtask" element={<Createtak/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
