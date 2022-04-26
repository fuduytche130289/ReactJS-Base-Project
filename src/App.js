import {BrowserRouter, Router, Routes, Link, Route} from "react-router-dom";
import List from "./pages/todos/List";
import Add from "./pages/todos/Add";
import Edit from "./pages/todos/Edit";
import GalleryImage from "./pages/GalleryImage";
import Login from "./pages/Login";

function App() {
  return (
      <>
        <BrowserRouter>
            <Link to="/add">Add</Link>
            <Routes>
                <Route path = "/" element = {<List />}/>
                <Route path = "/add" element = {<Add />}/>
                <Route path = "/edit" element = {<Edit />}/>
                <Route path = "/gallery" element = {<GalleryImage />}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
