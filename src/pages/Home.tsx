import Carousel from "../components/Carousel.tsx"
import Navbar from "../components/Navbar.tsx"
import Profile from "../assets/Profile Photo.png"
import PBB from "../assets/PBB.png"
import Listrik from "../assets/Listrik.png"
import Pulsa from "../assets/Pulsa.png"
import PDAM from "../assets/PDAM.png"
import PGN from "../assets/PGN.png"
import TVLangganan from "../assets/Televisi.png"
import Musik from "../assets/Musik.png"
import Game from "../assets/Game.png"
import Makanan from "../assets/Voucher Makanan.png"
import Kurban from "../assets/Kurban.png"
import Zakat from "../assets/Zakat.png"
import PaketData from "../assets/Paket Data.png"

const Home = () => {
  const allBtn = [{
    name:"PBB",
    image:PBB
  },{
    name:"Listrik",
    image:Listrik
  },{
    name:"Pulsa",
    image:Pulsa
  },{
    name:"PDAM",
    image:PDAM
  },{
    name:"PGN",
    image:PGN
  },{
    name:"TV Langganan",
    image:TVLangganan
  },{
    name:"Musik",
    image:Musik
  },{
    name:"Voucher Game",
    image:Game
  },{
    name:"Voucher Makanan",
    image:Makanan
  },{
    name:"Kurban",
    image:Kurban
  },{
    name:"Zakat",
    image:Zakat
  },{
    name:"Paket Data",
    image:PaketData
  }]
  return (
    <div>
      <Navbar />
      <div className="py-5 px-12 flex flex-col gap-10">
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
        {/* Button */}
        <div className="flex justify-between items-start">
          {
            allBtn.map(data => {
              return (
                <button className="flex flex-col items-center justify-center w-1/12">
                  <img src={data.image} />
                  <span>{data.name}</span>
                </button>
              )
            })
          }
        </div>
      </div>
      {/* Promo */}
      <div className="pl-10 mt-10">
        <div>
          <h1 className="text-lg font-bold">Temukan promo menarik</h1>
        </div>
        <Carousel />
      </div>
    </div>
  )
}

export default Home