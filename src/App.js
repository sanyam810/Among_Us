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
  Navigate,
}from "react-router-dom";
import Particles from "./components/Particles";

function App() {
    const {currentUser}=useContext(AuthContext);  
    const ProtectedRoute=({children})=>{
      if(!currentUser){
        return <Navigate to="/login"/>
      }
      return children;
    }
    return (
    <div>
      <Particles/>
    <BrowserRouter>
    <Routes>
      
      <Route path="/">
        <Route index element={<ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Route>
    </Routes>
  </BrowserRouter></div>
    
  );
}

export default App;
