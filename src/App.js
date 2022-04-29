import {BrowserRouter, Routes, Route} from "react-router-dom";
import Add from "./pages/todos/Add";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Add/>}/>
                    <Route path="/add" element={<Add/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
