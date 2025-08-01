import { useSelector } from "react-redux"
import Navbar from "../components/Navbar.tsx"
import Profile from "../assets/Profile Photo.png"
import Input from "../components/Input.tsx"
import service from "../service/service.ts"

const Payment = () => {
  const data = useSelector((state) => state.profile)
  console.log(data)
  const submitPayment = async() => {
    try {
      const token = localStorage.getItem("token")
      const paymentData = {
        service_code:"PULSA"
      }
      const data = await service.postTransaction(token, paymentData)
      console.log(data)
    }
    catch(err) {
      console.log(err)
    }
  }
  return (
    <div>
      <Navbar />
      <div className="py-5 px-12">
        {/* Profile + saldo */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <div>
              <img src={ Profile } />
            </div>
            <div>
              <span>Selamat datang,</span>
              <h1 className="text-2xl font-bold">nama user</h1>
            </div>
          </div>
          <div className="bg-red-500 text-white rounded-lg w-3/5 flex flex-col gap-4 p-4">
            <span>Saldo anda</span>
            <h1 className="text-2xl font-bold">Rp </h1>
            <span>Lihat saldo</span>
          </div>
        </div>
        {/* Title payment */}
        <div className="mt-8">
          <span>Pembayaran</span>
          <h1 className="text-2xl font-bold">Pembayaran</h1>
        </div>
        {/* Payment Input */}
        <div className="mt-8">
          <form className="flex flex-col gap-5" action={submitPayment}>
            <Input inputType="number" placeholder="test" name="payment"/>
            <button className="w-full bg-red-600 text-white py-2 rounded">Bayar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Payment