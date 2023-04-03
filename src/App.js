import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./style.scss"
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import{
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";

function App() {
    const {currentUser}=useContext(AuthContext);  
    console.log(currentUser)
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
