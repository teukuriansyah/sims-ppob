import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login.tsx"
import User from "./pages/User.tsx"
import Home from "./pages/Home.tsx"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App