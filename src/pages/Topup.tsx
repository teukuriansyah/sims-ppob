import service from "../service/service.ts"
import Navbar from "../components/Navbar.tsx"
import Profile from "../assets/Profile Photo.png"
import Input from "../components/Input.tsx"
import Modal from "../components/Modal.tsx"

const Topup = () => {
  const submitTopup = async(formData) => {
    try {
      const token = localStorage.getItem("token")
      const topupData = {
        top_up_amount:formData.get("topup")
      }
      const { data } = await service.postTopup(token,topupData)
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
          <span>Silahkan masukkan</span>
          <h1 className="text-2xl font-bold">Nominal Top Up</h1>
        </div>
        {/* Topup Input */}
        <div className="mt-8 flex">
          <div className="w-2/3">
            <form className="flex flex-col gap-5" action={submitTopup}>
              <Input inputType="number" placeholder="masukkan nominal Top Up" name="topup"/>
              <button className="w-full bg-red-600 text-white py-2 rounded">Bayar</button>
            </form>
          </div>
          <div className="w-1/3 grid grid-cols-3 px-4 gap-3">
            <button className="border border-gray-500 rounded text-gray-600">Rp. 10.000</button>
            <button className="border border-gray-500 rounded text-gray-600">Rp. 20.000</button>
            <button className="border border-gray-500 rounded text-gray-600">Rp. 50.000</button>
            <button className="border border-gray-500 rounded text-gray-600">Rp. 100.000</button>
            <button className="border border-gray-500 rounded text-gray-600">Rp. 250.000</button>
            <button className="border border-gray-500 rounded text-gray-600">Rp. 500.000</button>
          </div>
        </div>
      </div>
      {/* <Modal /> */}
    </div>
  )
}

export default Topup