import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store.ts"
import Login from "./pages/Login.tsx"
import User from "./pages/User.tsx"
import Register from "./pages/Register.tsx"
import Home from "./pages/Home.tsx"
import Payment from "./pages/Payment.tsx"
import Topup from "./pages/Topup.tsx"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/topup" element={<Topup/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App