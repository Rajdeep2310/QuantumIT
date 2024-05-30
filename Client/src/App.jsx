import { Routes , Route } from "react-router-dom"
import Login from "./Components/Login"
import AllUsers from "./Components/getAllUsers"
import Register from "./Components/Register"
import ProtectedRoute from "./Components/PrivateRoutes"

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route 
        path="/" 
        element={
          <ProtectedRoute>
            <AllUsers />
          </ProtectedRoute>
        } 
      />
    </Routes>
  )
 }
export default App
