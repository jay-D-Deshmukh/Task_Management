import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signin";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Createtak from "./Components/Createtak";
import Viewalltask from "./Components/Viewalltask";
import UpdateTask from "./Components/UpdateTask";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createtask" element={<Createtak/>} />
          <Route path="/alltask" element={<Viewalltask/>} />
          <Route path="/updatetask" element={<UpdateTask/>} />
          


        </Routes>
      </BrowserRouter>
    </>
  );
}
