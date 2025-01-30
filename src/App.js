import { Route, Routes } from "react-router-dom";
import Login from "./public/auth/Login";
import Index from "./public/home/Index";
import Registration from "./public/auth/Registration";


function App() {
  return (
    <>
    <Routes>
      <Route exact path="/index" element={<Index/>}/>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/register" element={<Registration/>}/>
    </Routes>
    </>
  );
}

export default App;
