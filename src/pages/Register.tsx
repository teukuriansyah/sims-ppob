import service from "../service/service.ts"
import Input from "../components/Input.tsx"
import Illustration from "../assets/Illustrasi Login.png"
import Logo from "../assets/Logo.png"

const Register = () => {
  const submitRegister = (formData) => {
    try {
      const password = formData.get("password")
      const confirmPassword = formData.get("confirmPassword")
      if(password != confirmPassword) {
        alert("Password tidak sama")
      }
      else {
        const dataUser = {
          email:formData.get("email"),
          first_name:formData.get("firstName"),
          last_name:formData.get("lastName"),
          password:formData.get("password")
        }
        const data = service.userRegister(dataUser)
        window.location.assign("/login")
      }
    }
    catch(err) {
      console.log(err)
    }
  }
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
            <h1 className="text-center font-bold text-2xl">Lengkapi data untuk membuat akun</h1>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-3/4">
          <form className="flex flex-col gap-10" action={submitRegister}>
            <div className="flex flex-col gap-6">
              <Input inputType="email" placeholder="masukkan email anda" name="email"/>
              <Input inputType="text" placeholder="nama depan" name="firstName"/>
              <Input inputType="text" placeholder="nama belakang" name="lastName"/>
              <Input inputType="password" placeholder="masukkan password anda" name="password"/>
              <Input inputType="password" placeholder="masukkan password anda" name="confirmPassword"/>
            </div>
            <div>
              <button className="bg-red-600 text-white py-3 rounded w-full">Masuk</button>
            </div>
          </form>
          <div className="flex justify-center">
            <span>sudah punya akun? login <a href="/login" className="text-red-500 font-bold">di sini</a></span>
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