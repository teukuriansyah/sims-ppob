import Input from "../components/Input.tsx"
import Illustration from "../assets/Illustrasi Login.png"
import Logo from "../assets/Logo.png"

const Register = () => {
  return (
    <div className="flex justify-between h-screen">
      {/* Form */}
      <div className="flex flex-col gap-10 justify-center items-center w-1/2">
        <div className="flex flex-col gap-7">
          <div className="flex items-center justify-center gap-3">
            <img src={Logo}/>
            <h1 className="text-center font-bold text-2xl">SIMS PPOB</h1>
          </div>
          <div>
            <h1 className="text-center font-bold text-2xl">Masuk atau buat akun untuk memulai</h1>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-3/4">
          <form className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <Input inputType="email" placeholder="masukkan email anda" name="email"/>
              <Input inputType="text" placeholder="nama depan" name="firstName"/>
              <Input inputType="text" placeholder="nama belakang" name="lastName"/>
              <Input inputType="password" placeholder="masukkan password anda" name="password"/>
            </div>
            <div>
              <button className="bg-red-600 text-white py-3 rounded w-full">Masuk</button>
            </div>
          </form>
          <div className="flex justify-center">
            <span>belum punya akun? registrasi di sini</span>
          </div>
        </div>
      </div>
      {/* Illustration */}
      <div className="w-1/2">
        <img src={Illustration} className="h-full w-full object-cover" />
      </div>
    </div>
  )
}

export default Register