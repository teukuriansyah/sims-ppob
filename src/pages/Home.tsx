import { useState, useEffect } from "react"
import service from "../service/service.ts"
import Navbar from "../components/Navbar.tsx"

const Home = () => {
  const [datas,setDatas] = useState([])
  const [balance,setBalance] = useState(0)
  const [banner,setBanner] = useState([])
  const [services,setServices] = useState([])
  const fetchingData = async() => {
    try {
      const token :string|null = localStorage.getItem("token")
      const { data } = await service.getProfile(token)
      const { data:balance } = await service.getBalance(token)
      const { data:banner } = await service.getBanner()
      const { data:services } = await service.getServices(token)
      setDatas(data.data)
      setBalance(balance.data.balance)
      setBanner(banner.data)
      setServices(services.data)
    }
    catch(err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    fetchingData()
  },[])
  return (
    <div>
      <Navbar />
      <div className="py-5 px-12 flex flex-col gap-10">
        {/* Profile + saldo */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <div>
              <img src={ datas?.profile_image } />
            </div>
            <div>
              <span>Selamat datang,</span>
              <h1 className="text-2xl font-bold">{datas?.first_name} {datas?.last_name}</h1>
            </div>
          </div>
          <div className="bg-red-500 text-white rounded-lg w-3/5 flex flex-col gap-4 p-4">
            <span>Saldo anda</span>
            <h1 className="text-2xl font-bold">Rp {balance}</h1>
            <span>Lihat saldo</span>
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-between items-start">
          {
            services.map((data,i) => {
              return (
                <button key={i} className="flex flex-col items-center justify-center w-1/12">
                  <img src={data.service_icon} />
                  <span>{data.service_name}</span>
                </button>
              )
            })
          }
        </div>
      </div>
      {/* Promo */}
      <div className="pl-10 mt-3">
        <div>
          <h1 className="text-lg font-bold">Temukan promo menarik</h1>
        </div>
        <div className="flex gap-3 mt-2 z-[-10]">
          {
            banner?.map((data,i) => <img key={i} src={data?.banner_image} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Home